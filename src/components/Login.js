import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

async function Login() {
    
    async function login(formData) {
        'use server'
        const username = formData.get('username')
        const password = formData.get('password')
        const res = await fetch(`${process.env.BACKEND}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(res.status === 200) {
            const data = await res.json()
            cookies().set('token', data.token)
            redirect('/')
        }
        else
        {
        }
    }

    return (

        <form action={login} class="flex h-screen w-full items-center justify-center  bg-[url('/subtle-pattern.svg')] bg-repeat">
            <div class="border text-card-foreground w-full max-w-md rounded-lg  bg-[#131313] border-[#cecece28]   pl-4 pr-4 pt-2 pb-2  p-6 shadow-xl" >
              <div class="flex flex-col p-6 space-y-2">
                  <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold text-gray-50">Welcome Back</h3>
                  <p class="text-sm text-gray-400">Enter your credentials to access your account.</p>
              </div>
              <div class="p-6 space-y-4">
                  <div class="space-y-2">
                      <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                          for="username"
                      >
                          Username
                      </label>
                      <input
                          class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 text-gray-50 placeholder:text-gray-400"
                          id="username"
                          placeholder="Enter your username"
                            type="text"
                            name="username"
                      />
                  </div>
                  <div class="space-y-2">
                      <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                          for="password"
                      >
                          Password
                      </label>
                      <input
                          class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 text-gray-50 placeholder:text-gray-400"
                          id="password"
                          placeholder="Enter your password"
                            type="password"
                            name="password"
                      />
                    </div>
                    <div>
                        <Link href="/signup" class="text-sm text-gray-400 hover:text-gray-50">Don&apos;t have an account? Sign up</Link>
                    </div>
                  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-primary text-gray-50 hover:bg-primary/90">
                      Login
                  </button>
              </div>
          </div>
      </form>
  )
}

export default Login