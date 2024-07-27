"use client"
import React from 'react'

const NewC = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button className="border-red-600 text-pink-700" onClick={()=>{setCount((prev)=>prev+1)}}>Increment</button>
    </div>
  )
}

export default NewC