import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorkspacePage() {
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
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Collaborative Workspace
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Modern workspace for distributed teams
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              A collaborative workspace platform designed for remote teams to work together seamlessly.
              Features include real-time document editing, video conferencing, task management, and
              integrated communication tools.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Real-time collaborative editing</li>
              <li>Integrated video and voice calls</li>
              <li>Kanban-style task boards</li>
              <li>File sharing and version control</li>
              <li>Team chat with threads</li>
            </ul>

            <h2>Tech Stack</h2>
            <ul>
              <li>Next.js 16 for server-side rendering</li>
              <li>WebRTC for video conferencing</li>
              <li>Operational Transform for collaborative editing</li>
              <li>Redis for real-time pub/sub</li>
              <li>PostgreSQL for data persistence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
