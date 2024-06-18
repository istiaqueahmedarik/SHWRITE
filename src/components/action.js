'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function save(id,content,drawing)
{
    
    
    
    await fetch(`${process.env.BACKEND}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token').value}`
        },
        body: JSON.stringify({
            id: id,
            editor: content,
            drawing: drawing
        })
    }) 
    
}
export async function fetchData(id) {
    const response = await fetch(`${process.env.BACKEND}/notes/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token').value}`
        }
    })
    if (response.status !== 200) {
        deleteData().then(() => {
            redirect('/login')
        })
    }
    const data = await response.json()
    
    
    return data
}

export async function deleteData() {
    console.log('delete')
    cookies().delete('token')
    redirect('/login')
}