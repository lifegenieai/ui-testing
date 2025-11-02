import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AnalyticsPage() {
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
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Analytics Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Real-time analytics platform built with Next.js 16
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              A comprehensive analytics dashboard that provides real-time insights into user behavior,
              conversion metrics, and business performance. Built with modern web technologies for
              optimal performance and user experience.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Real-time data streaming with WebSockets</li>
              <li>Interactive charts using D3.js</li>
              <li>Custom event tracking system</li>
              <li>Advanced filtering and segmentation</li>
              <li>Export capabilities for reports</li>
            </ul>

            <h2>Tech Stack</h2>
            <ul>
              <li>Next.js 16 with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Framer Motion for animations</li>
              <li>shadcn/ui component library</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
