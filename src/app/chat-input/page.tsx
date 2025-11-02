"use client"

import { AiInput } from "@/components/ui/ai-input"

export default function ChatInputPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Chat Input Prototype
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Testing the AI-powered chat input with search toggle and file upload
          </p>
        </div>

        <div className="space-y-6">
          <AiInput />

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Features
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Auto-resizing textarea</strong> - Expands as you type (min 48px, max 164px)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Animated placeholder</strong> - Switches between "Ask Skiper Ai..." and "Search the web..."</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>File upload</strong> - Click the paperclip icon to attach images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Search toggle</strong> - Click the globe icon to toggle search mode</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Submit</strong> - Press Enter or click the send button</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
