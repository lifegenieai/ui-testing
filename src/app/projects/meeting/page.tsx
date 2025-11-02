import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MeetingPage() {
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
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Smart Meeting Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-powered meeting notes and action items
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              An intelligent meeting assistant that automatically transcribes conversations,
              generates summaries, and extracts action items. Integrates with calendar systems
              and sends follow-up reminders to participants.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Real-time speech-to-text transcription</li>
              <li>AI-generated meeting summaries</li>
              <li>Automatic action item extraction</li>
              <li>Calendar integration (Google, Outlook)</li>
              <li>Smart follow-up reminders</li>
            </ul>

            <h2>Tech Stack</h2>
            <ul>
              <li>Next.js 16 with streaming SSR</li>
              <li>OpenAI GPT-4 for summarization</li>
              <li>Whisper API for transcription</li>
              <li>Vector database for semantic search</li>
              <li>WebSockets for real-time updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
