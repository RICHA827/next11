'use client'
import React from 'react'


const Files = ({params}) => {
  return (
    //console.log(params),
    <div>
        <h1>Project {params.all}</h1>
        <br />
        All Routes
        {params.all.map((p) => (
            <li key={p}> {p}</li>
        ))}
    </div>
  )
}

export default Files