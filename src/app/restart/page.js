import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"


async function page() {
    async function act() {
        'use server'
        cookies().delete('token')
        redirect('/login')
    }
  return (
      <div class="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md" data-v0-t="card">
              <div class="flex flex-col p-6 space-y-2 text-center">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400"
                  >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                  </svg>
                  <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold">Session Ended</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                      Your session has expired. Please sign in again to continue.
                  </p>
              </div>
              <form action={act} class="p-6">
                  <button   class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#fff] text-black hover:bg-[#848484]">
                      Sign In
                  </button>
              </form>
          </div>
      </div>
  )
}

export default page