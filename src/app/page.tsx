export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          UI Testing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
        </p>
        <div className="flex gap-4 justify-center">
          <div className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg">
            Next.js 16
          </div>
          <div className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-lg">
            TypeScript
          </div>
          <div className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-lg">
            Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
}
