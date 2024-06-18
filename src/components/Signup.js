import { cookies } from "next/headers"
import Link from "next/link"

async function Signup() {
    async function register(formData) { 
        'use server'
        const username = formData.get('email')
        const password = formData.get('password')
        const res = await fetch(`${process.env.BACKEND}/register`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
       
        if (res.status === 200) {
            const data = await res.json()
            cookies().set('token', data.token)
            redirect('/dashboard')
       }
    }
  return (
      <div className="flex items-center justify-center min-h-screen ">
          <div className="w-full max-w-md p-6 rounded-lg bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 shadow-lg">
              <div className="space-y-4">
                  <div className="text-center">
                      <h1 className="text-3xl font-bold text-gray-50">Sign Up</h1>
                      <p className="text-gray-400">Create your account</p>
                  </div>
                  <form action={register} className="space-y-4">
                     
                      <div>
                          <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                              for="email"
                          >
                              Email
                          </label>
                          <input
                              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700/50 border-gray-600 text-gray-50 focus:border-indigo-500 focus:ring-indigo-500"
                              id="email"
                              placeholder="john@example.com"
                              type="email"
                              name="email"
                          />
                      </div>
                      <div>
                          <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                              for="password"
                          >
                              Password
                          </label>
                          <input
                              className="flex h-10 w-full rounded-md  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#131313] border-[#cecece28] border-[0.1px] hover:bg-[#84838354] text-gray-50 
                              
                               focus:border-indigo-500 focus:ring-indigo-500"
                              id="password"
                              placeholder="••••••••"
                              type="password"
                              name="password"
                          />
                      </div>
                      <div>
                              <Link href={"/login"} className="text-sm text-gray-300 hover:text-gray-100">Already have an account?</Link>
                      </div>
                      <button
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                          type="submit"
                      >
                          Sign Up
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Signup