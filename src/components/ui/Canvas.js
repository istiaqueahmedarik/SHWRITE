'use client'
import { Excalidraw } from '@excalidraw/excalidraw'
import debounce from 'debounce'
import React from 'react'
import { save } from '../action'

function Canvas(props) {
  return (
    <div className={`${props.isEditor ? 'border-l-2' :'border-l-1'} w-[100%]`} style={{ height: "90vh" }}>
      <Excalidraw
        UIOptions={{ 

          canvasActions: {
            changeViewBackgroundColor: true,
            clearCanvas: true,
            loadScene: true,
            toggleTheme: true,
          },
         }}
        initialData={
          JSON.parse(localStorage.getItem(`${props.id} excalidraw`)) || {}
        }
        theme='dark'

        onChange={
          debounce((elements, state) => {
            
            localStorage.setItem(`${props.id} excalidraw`, JSON.stringify({ elements, state }))
            save(props.id, localStorage.getItem(`${props.id} data`) || JSON.stringify([]), localStorage.getItem(`${props.id} excalidraw`) || JSON.stringify({}))
          }, 500)
        } />
          </div>
  )
}

export default Canvas