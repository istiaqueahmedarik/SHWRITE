import CanvasWrapper from "@/components/CanvasWrapper"
import Button from "@/components/ui/Button"
import Canvas from "@/components/ui/Canvas"
import Editor from "@/components/ui/Editor"
import { cookies } from "next/headers"
import { Suspense } from "react"

async function page({ params }) {
    
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <CanvasWrapper id={params.id} />
            </Suspense>
      </div>
     
  )
}

export default page