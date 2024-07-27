import React from 'react'
import "../style/global.css"
import NewC from '../components/newc'

const page = () => {
  return (
    <div>
        <h1 className="text-purple-700">Welcome to NextJS App in AWS</h1>
        <NewC/>
        
    </div>
  )
}

export default page