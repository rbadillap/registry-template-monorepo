import { NextResponse } from "next/server"
import path from "path"
import { promises as fs } from "fs"
import { registryItemSchema } from "shadcn/registry"
import { verifyToken } from "@/lib/shadcn/registry/utils"

// This route shows an example for serving a component using a route handler.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    // Get the authorization token from ?token=
    const url = new URL(request.url)
    const token = url.searchParams.get('token')

    if (!token) {
      // If accessing via browser, redirect to login with return URL
      if (request.headers.get("accept")?.includes("text/html")) {
        const returnUrl = encodeURIComponent(url.pathname)
        return NextResponse.redirect(
          new URL(`/example/access/validate-license?returnUrl=${returnUrl}`, request.url)
        )
      }
      
      // If accessing via API, return a 401 error
      return NextResponse.json(
        { error: "Authorization token is required" },
        { status: 401 }
      )
    }

    const isValidToken = await verifyToken(token)

    if (!isValidToken) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      )
    }

    const { name } = await params

    // Cache the registry import
    const registryData = await import("@/registry.json")
    const registry = registryData.default

    // Find the component from the registry.
    const component = registry.items.find((c) => c.name === name)

    // If the component is not found, return a 404 error.
    if (!component) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      )
    }

    // Validate before file operations.
    const registryItem = registryItemSchema.parse(component)

    // If the component has no files, return a 400 error.
    if (!registryItem.files?.length) {
      return NextResponse.json(
        { error: "Component has no files" },
        { status: 400 }
      )
    }

    // Debug: Log current working directory
    console.log('Current working directory:', process.cwd());

    // Debug: List all files in the current directory
    try {
      const currentDirFiles = await fs.readdir(process.cwd(), { withFileTypes: true });
      console.log('\nFiles and directories in current working directory:');
      currentDirFiles.forEach(dirent => {
        console.log(`${dirent.isDirectory() ? '[DIR]' : '[FILE]'} ${dirent.name}`);
      });
    } catch (err) {
      console.error('Error reading directory:', err);
    }

    // Read all files in parallel with debug information
    const filesWithContent = await Promise.all(
      registryItem.files.map(async (file) => {
        const filePath = path.join(process.cwd(), file.path)
        console.log('\nAttempting to read file:', {
          originalPath: file.path,
          resolvedPath: filePath,
          exists: await fs.stat(filePath).then(() => true).catch(() => false)
        });
        const content = await fs.readFile(filePath, "utf8")
        return { ...file, content }
      })
    )

    // Debug: Log the final filesWithContent structure
    console.log('\nProcessed files:', filesWithContent.map(f => ({
      path: f.path,
      contentLength: f.content.length
    })));

    // Return the component with the files.
    return NextResponse.json({ ...registryItem, files: filesWithContent })
  } catch (error) {
    console.error("Error processing component request:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
