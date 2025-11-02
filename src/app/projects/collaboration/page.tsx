import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/timeline"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Timeline
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
            Team Collaboration Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Streamline team workflows and communication
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              A comprehensive team collaboration platform that brings together project management,
              communication, and knowledge sharing in one unified interface. Designed to reduce
              tool sprawl and improve team productivity.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Project roadmaps and timelines</li>
              <li>Team wikis and documentation</li>
              <li>Sprint planning and retrospectives</li>
              <li>Integration with GitHub and Jira</li>
              <li>Custom workflows and automation</li>
            </ul>

            <h2>Tech Stack</h2>
            <ul>
              <li>Next.js 16 with React Server Components</li>
              <li>tRPC for type-safe APIs</li>
              <li>Prisma ORM with PostgreSQL</li>
              <li>NextAuth.js for authentication</li>
              <li>Zustand for client state management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
