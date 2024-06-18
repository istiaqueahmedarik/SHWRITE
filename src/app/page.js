import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="grid grid-cols-2 w-full">
        <div className="m-auto w-full">
          <h1 className="text-6xl ml-2 mb-2 font-bold text-left">
            SH-WRITING
          </h1>
          <p className="text-left ml-2 font-extralight w-fit">
            A simple writing app for Everyone
          </p>
          {cookies().get('token') ? (
            <Link href="/dashboard" className="ml-2 mb-2 bg-[#271034] pl-4 pr-4 pt-2 pb-2 rounded-full flex flex-row justify-around w-fit">
            <h1>
              Dashboard
            </h1>
          </Link>
          ) : (
              <Link href="/login" className="ml-2 mb-2 bg-[#271034] pl-4 pr-4 pt-2 pb-2 rounded-full flex flex-row justify-around w-fit">
            <h1>
              Login
            </h1>
              </Link>
              
          )}

        </div>
        <Image
          className="m-auto"
          src="/image1.jpg"
          alt="Next.js Logo"
          width={800}
          height={37}
          priority
        />
      </div>
     
    </main>
  );
}
