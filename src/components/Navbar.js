import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

async function Navbar() {
    async function signOut() {
        'use server'
        cookies().delete('token')
        redirect('/login')
    }

  return (
      <div className='grid grid-cols-[3fr_1fr] w-full p-2'>
          <Link href={"/"} className='font-extrabold'>SHWRITE</Link>
          {cookies().get('token') ? (
              <div className='flex flex-row mr-4 ml-auto'>
                  <Link href='/dashboard' className='text-gray-50 rounded-full pl-4 pr-4 pt-2 bg-[#131313] border-[#cecece28] border-[0.1px] hover:bg-[#84838354] pb-2 ml-2 mr-2 transition-all'>
                      Dashboard
                    </Link>
                  <form action={signOut}>
                      <button type='submit' class="w-full text-gray-50 rounded-full pl-4 pr-4 pt-2 bg-[#131313] border-[#cecece28] border-[0.1px] hover:bg-[#84838354] pb-2 ml-2 mr-2 transition-all">
                          Log Out
                      </button>
                  </form>
              </div>
          ) : (
                  <div className='flex  flex-row mr-0  ml-auto'>
                      <Link className=' bg-[#131313] border-[#cecece28] border-[0.1px] hover:bg-[#84838354] pl-4 pr-4 pt-2 pb-2 rounded-full m-2' href='/login'>
                      Login
                  </Link>
                      <Link className=' bg-[#131313] border-[#cecece28] border-[0.1px] hover:bg-[#84838354] pl-4 pr-4 pt-2 pb-2 rounded-full m-2' href='/signup'>
                      Register
                  </Link>
              </div>

          )}          
      </div>
  )
}

export default Navbar