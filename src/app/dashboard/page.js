import Card from "@/components/Card"
import { deleteData } from "@/components/action"
import { BadgePlus } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

async function page() {
    if (!cookies().get('token')) {
        redirect('/login')
    }
    const response = await fetch(`${process.env.BACKEND}/notes/all/allNotes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token').value}`
        }
    },
        { next: { revalidate: 10 } }
    )
    if (response.status !== 200) {
        redirect('/restart')
    }
    console.log(response.status)
    const data = await response.json()
    
    
    return (
        <div>
            <Link className="ml-2 bg-[#271034] pl-4 pr-4 pt-2 pb-2 rounded-full flex flex-row justify-around w-fit" href="/dashboard/createProject">
                <h1>
                    Create
                </h1>
                <div className="ml-2">
                  <BadgePlus/>
                </div>
            </Link>
            <div className="flex flex-wrap w-full">
                {data.map((note, index) => (
                    <Card key={index} id={note.id} title={note.title} description={note.description} />
                ))
                }
            </div>
       </div>
    )
}

export default page