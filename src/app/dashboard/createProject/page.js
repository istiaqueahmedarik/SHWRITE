import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function page() {
    async function createProject(formData) {
        'use server'
        const title = formData.get('title')
        const description = formData.get('description')
        const response = await fetch(`${process.env.BACKEND}/notes/create/createNew`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookies().get('token').value}`
            }
        })
        if (response.status !== 200) {
            redirect('/restart')

        }
            const data = await response.json()
            redirect(`/editor/${data.id}`)

       
    }
    
    return (
        <div className="grid place-content-center w-screen h-screen">
            <div className="rounded-lg  bg-card text-card-foreground shadow-sm w-full max-w-md bg-[#131313] border-[#cecece28] border-[0.1px]" >
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Create a New Project</h3>
                    <p className="text-sm text-muted-foreground">Fill out the form below to get started with your new project.</p>
                </div>
                <div className="p-6">
                    <form action={createProject} className="grid gap-4">
                        <div className="grid gap-1.5">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="title"
                            >
                                Project Title
                            </label>
                            <input
                                className="bg-[#131313] border-[#cecece28] border-[0.1px] flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="title"
                                placeholder="Enter a title for your project"
                                name="title"
                            />
                        </div>
                        <div className="grid gap-1.5">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md bg-[#131313] border-[#cecece28] border-[0.1px]  border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="description"
                                placeholder="Provide a brief description of your project"
                                rows="4"
                                name="description"

                            ></textarea>
                        </div>
                        <div className="items-center p-6 flex justify-end">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                type="submit"
                            >
                                Create Project
                            </button>
                        </div>
                    </form>
                </div>
             
            </div>
        </div>
    )
}

export default page