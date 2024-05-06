'use client'

import { log } from "console"

const Users = ({params}:any) => {
  //console.log(params);
  return (
    <div>
        Information about {params.users} <br />
        Hello I'm {params.users}
    </div>
  )
}

export default Users