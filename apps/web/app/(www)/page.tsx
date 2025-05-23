"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion"
import Logo from "@/components/logos"
import { Avatar, AvatarImage, AvatarFallback } from "@workspace/ui/components/avatar"
import Link from "next/link"

export default function Page() {
  const logoUrl = 'https://registry-template-zeta.vercel.app/example/logo'
  
  return (
    <main className="min-h-svh flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-4 min-h-[60vh]">
        {/* Animated background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[480px] h-[320px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-white via-muted-foreground to-accent bg-clip-text text-transparent drop-shadow-xl">
            zeta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            The open source registry for 
            <span className="px-2 font-mono text-accent-foreground bg-accent/40">
              <Logo name="shadcn" className="w-5 h-5 inline-flex items-center gap-1" />
              shadcn/ui
            </span> 
            components &mdash; built for private and premium projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-base font-semibold bg-primary text-primary-foreground border border-primary/70 shadow-inner shadow-primary/10 hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 focus:outline-none w-full sm:w-auto"
            >
              <Link href="/docs" className="flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-4 text-base font-semibold border border-border/70 text-foreground bg-background hover:bg-muted/60 focus:ring-2 focus:ring-accent/40 focus:outline-none w-full sm:w-auto"
            >
              <a href="https://github.com/rbadillap/zeta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Logo name="github" className="w-4 h-4" /> View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Zeta? */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-2">What is Zeta?</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Zeta is a registry for shadcn/ui that enables secure distribution of private or premium components, integrating advanced licensing and protection. Perfect for teams and creators who want to share components without worrying about unauthorized access.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="flex flex-col items-center justify-center px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-12 text-center">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 gap-x-8 w-full max-w-5xl">
          <div className="relative bg-card/70 rounded-xl py-8 px-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-mono text-muted-foreground drop-shadow-lg select-none bg-background rounded-md py-1 px-4 border border-border">1</span>
            <h3 className="font-semibold mb-2 mt-6 text-lg bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Publish your components
            </h3>
            <p className="text-sm text-muted-foreground text-center">Download this template or copy the components you need.</p>
          </div>
          <div className="relative bg-card/70 rounded-xl py-8 px-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-mono text-muted-foreground drop-shadow-lg select-none bg-background rounded-md py-1 px-4 border border-border">2</span>
            <h3 className="font-semibold mb-2 mt-6 text-lg bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Protect with License Keys
            </h3>
            <p className="text-sm text-muted-foreground text-center">Integrate <a href='https://docs.polar.sh/features/benefits/license-keys' target='_blank' rel='noopener noreferrer' className='underline hover:text-primary'>Polar.sh</a> to issue and validate licenses automatically.</p>
          </div>
          <div className="relative bg-card/70 rounded-xl py-8 px-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-mono text-muted-foreground drop-shadow-lg select-none bg-background rounded-md py-1 px-4 border border-border">3</span>
            <h3 className="font-semibold mb-2 mt-6 text-lg bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Install via CLI
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-2">Users install components using the shadcn CLI with their access key:</p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Try it yourself</h2>
          
          {/* Component Preview Card */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex flex-col items-center gap-6">
              {/* Logo Preview */}
              <div className="relative">
                <div className="w-20 h-20 flex items-center justify-center bg-background rounded-xl border border-border shadow-lg">
                  <Logo name="zeta" className="w-10 h-10 text-foreground" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="px-2 py-1 text-[10px] font-mono bg-primary text-primary-foreground rounded-md shadow-lg">
                    Logo
                  </div>
                </div>
              </div>

              {/* Installation Command */}
              <div className="w-full space-y-2">
                <p className="text-sm text-center text-muted-foreground">Install this component from our registry:</p>
                <div className="relative">
                  <pre className="bg-background border border-border rounded-lg p-3 font-mono text-xs sm:text-sm overflow-x-auto">
                    <code>npx shadcn add {logoUrl}</code>
                  </pre>
                  <div className="absolute top-0 right-0 mt-1.5 mr-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => {
                        navigator.clipboard.writeText(`npx shadcn@latest add ${logoUrl}`)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <rect width="8" height="8" x="8" y="8" rx="2" />
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Card */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Protected Component</h3>
            <div className="prose prose-sm dark:prose-invert">
              <p className="text-sm text-muted-foreground mb-4">
                This component is protected by a license key. Follow these steps to install:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
                <li className="leading-relaxed">
                  Open the component in your browser:
                  <a 
                    href={logoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1 text-xs sm:text-sm font-mono text-primary hover:underline truncate max-w-full pl-5"
                  >
                    {logoUrl}
                  </a>
                </li>
                <li className="leading-relaxed">Enter the valid license key when prompted</li>
                <li className="leading-relaxed">Upon successful validation, you&apos;ll receive an access token</li>
                <li className="leading-relaxed">Use this token to install the component via the CLI</li>
              </ol>
              <div className="mt-6">
                <Button
                  asChild
                  variant="ghost"
                  size="default"
                >
                  <a
                    href={logoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Access Component
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="flex flex-col items-center justify-center px-4 my-36">
        <h2 className="text-2xl font-semibold mb-8 text-center">Integrations</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <a href="https://docs.polar.sh/features/benefits/license-keys" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <Logo name="polar" className="w-10 h-10 rounded mb-2 opacity-80 group-hover:opacity-100 transition" />
            <span className="text-xs text-muted-foreground">Polar.sh</span>
          </a>
          <div className="flex flex-col items-center opacity-60">
            <Logo name="betterauth" className="w-10 h-10 rounded mb-2 opacity-80 group-hover:opacity-100 transition" />
            <span className="text-xs text-muted-foreground">Better Auth (soon)</span>
          </div>
          <div className="flex flex-col items-center opacity-60">
            <Logo name="vercel" className="w-10 h-10 rounded mb-2 opacity-80 group-hover:opacity-100 transition" />
            <span className="text-xs text-muted-foreground">Vercel (soon)</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col items-center justify-center px-4 mb-24 w-full">
        <h2 className="text-2xl font-semibold mb-8 text-center">FAQ</h2>
        <div className="w-full max-w-2xl">
          <Accordion type="multiple" className="border-none bg-transparent">
            <AccordionItem value="q1">
              <AccordionTrigger>What is a shadcn registry?</AccordionTrigger>
              <AccordionContent>
                A registry is a source of components that can be installed directly via the shadcn CLI, enabling easy sharing and distribution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How do I protect my components?</AccordionTrigger>
              <AccordionContent>
                By integrating with Polar.sh, you can issue and validate license keys, ensuring only authorized users can install your components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What is Polar.sh and how does it integrate?</AccordionTrigger>
              <AccordionContent>
                Polar.sh provides license key management and validation. Zeta integrates with Polar.sh to automate license checks for premium/private components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Can I use Zeta for open source projects?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Zeta is open source and can be used for both public and private registries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>What integrations are planned?</AccordionTrigger>
              <AccordionContent>
                Integrations with Better Auth for authentication and Vercel for deployment are in the works.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>How do I get an access key?</AccordionTrigger>
              <AccordionContent>
                Access keys are managed via Polar.sh. Check their <a href="https://docs.polar.sh/features/benefits/license-keys" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">documentation</a> for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>Is Zeta associated with shadcn/ui or Polar.sh?</AccordionTrigger>
              <AccordionContent>
                No, Zeta is an independent project created by <a href="https://x.com/rbadillap" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Ronny Badilla</a>. It leverages Polar.sh for license key management. More integrations are planned in the future.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Why is this project called Zeta?</AccordionTrigger>
              <AccordionContent>
                Zeta is the eighth letter of the Greek... nah! it was the name randomly chosen by Vercel when I created the project :)
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center py-8">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="https://x.com/shadcn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition">
            <Avatar className="w-8 h-8 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>sh</AvatarFallback>
            </Avatar>
            shadcn — creator of shadcn registry
          </a>
          <span className="text-muted-foreground">/</span>
          <a href="https://x.com/rbadillap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition">
            <Avatar className="w-8 h-8 rounded-full">
              <AvatarImage src="https://github.com/rbadillap.png" alt="Ronny Badilla" />
              <AvatarFallback>RB</AvatarFallback>
            </Avatar>
            rbadillap — creator of zeta registry
          </a>
        </div>
      </footer>
    </main>
  )
}
