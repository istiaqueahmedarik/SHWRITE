import Link from 'next/link'
import React from 'react'

function Card(props) {
  return (
    <Link href={`editor/${props.id}`} className=' border-[#3b6bff] hover:border-[2px] transition-colors pl-12 pr-12 pt-10 pb-10  rounded-md bg-[#131313] border-[#cecece28] border-[0.1px] m-5'>
      <h1 className='text-4xl'>{ props.title}</h1>
      <p className='text-xs font-extralight'>
          {props.description}
      </p>
    </Link>
  )
}

export default Card