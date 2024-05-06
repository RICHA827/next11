import React from 'react'

const Page = () => {
    console.log(process.env.MONGO_URI)
  return (
    <div>
        {
            process.env.MONGO_URI ? (
               <h1>db success</h1>
            ):
            <h1>404 NOT FOUND</h1>
        }
    </div>
  )
}

export default Page