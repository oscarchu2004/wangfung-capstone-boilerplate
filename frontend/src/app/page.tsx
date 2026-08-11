import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wangfung Chu - Developer Profile',
  description: 'RMIT Capstone developer profile',
}

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-zinc-950">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-4xl font-bold tracking-tight">
          Wangfung Chu
        </h1>

        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Developer — RMIT Capstone
        </p>

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">Project</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Focus Bear Time Tracking Sync Service and Dashboard
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Role</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Developer
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Skills</h2>

            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <li className="rounded-lg bg-zinc-100 px-4 py-2 text-center dark:bg-zinc-800">
                Java
              </li>
              <li className="rounded-lg bg-zinc-100 px-4 py-2 text-center dark:bg-zinc-800">
                JavaScript
              </li>
              <li className="rounded-lg bg-zinc-100 px-4 py-2 text-center dark:bg-zinc-800">
                Python
              </li>
              <li className="rounded-lg bg-zinc-100 px-4 py-2 text-center dark:bg-zinc-800">
                C++
              </li>
              <li className="rounded-lg bg-zinc-100 px-4 py-2 text-center dark:bg-zinc-800">
                C#
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}