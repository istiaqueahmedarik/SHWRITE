'use client'
import React from 'react'
import { save } from '../action'

function Button(props) {
  
  return (
    <div>
      <button className='bg-[#2d2536] rounded-lg pl-4 pr-4 pt-2 pb-2 m-1 hover:bg-[#332b3c] transition-all' onClick={() => {
        save(
          props.id,
          localStorage.getItem(`${props.id} data`),
          localStorage.getItem(`${props.id} excalidraw`)
      ) }}>Save</button>
    </div>
  )
}

export default Button