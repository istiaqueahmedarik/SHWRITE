'use client'
import React, { useEffect } from 'react'
import Editor from './ui/Editor'
import Canvas from './ui/Canvas'
import { fetchData, save } from './action'

function CanvasWrapper({id}) {
    const [isEditor, setIsEditor] = React.useState(true)
    const [isCanvas, setIsCanvas] = React.useState(true)
    const [drawing, setDrawing] = React.useState({})
    const [editor, setEditor] = React.useState([])
    useEffect(() => {
        const asyncFunc = async () => {
            const data = await fetchData(id);
            localStorage.setItem(`${id} data`, data.data.editor === undefined ? JSON.stringify([]) : data.data.editor)
            localStorage.setItem(`${id} excalidraw`, data.data.drawing === undefined ? JSON.stringify({}) : data.data.drawing)
         }
        
        asyncFunc()
     },[])
  return (
      <div className=''>
          <div className='flex flex-row w-fit justify-around m-auto'>
              <button className={`m-2 pl-4 pr-4 pt-2 pb-2 rounded-lg bg-[#131313] border-[#cecece28] border-[0.1px] ${isEditor && !isCanvas ? "bg-[#40364c]":''} hover:bg-[#332b3c] transition-all`} onClick={() => { setIsEditor(true); setIsCanvas(false); }}>Editor</button>
              <button className={`m-2 pl-4 pr-4 pt-2 pb-2 rounded-lg bg-[#131313] border-[#cecece28] border-[0.1px] ${!isEditor && isCanvas ? "bg-[#40364c]" : ''} hover:bg-[#332b3c] transition-all`} onClick={() => { setIsEditor(false); setIsCanvas(true); }}>Canvas</button>
              <button className={`m-2 pl-4 pr-4 pt-2 pb-2 rounded-lg bg-[#131313] border-[#cecece28] border-[0.1px] ${isEditor && isCanvas ? "bg-[#40364c]" : ''} hover:bg-[#332b3c] transition-all`} onClick={() => { setIsEditor(true); setIsCanvas(true); }}>Both</button>
          </div>
          <div className="flex flex-row ">
              {isEditor && <Editor isEditor={isEditor} isCanvas={isCanvas} id={id} editor={editor} setEditor={setEditor} />}
              {isCanvas && <Canvas id={id} isEditor={isEditor} isCanvas={isCanvas} drawing={drawing} setDrawing={setDrawing} />}
          </div>
      </div>
  )
}

export default CanvasWrapper