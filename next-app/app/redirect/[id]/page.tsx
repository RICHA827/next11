import React from 'react'
import { redirect } from 'next/navigation';

const Id = ({params}) => {
    if(params.id == 9){
        redirect("/login");
    }
  return (
    <div>Id is {params.id} </div>
  )
}

export default Id