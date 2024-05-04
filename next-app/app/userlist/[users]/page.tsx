'use client'

const Users = ({params}) => {

  return (
    <div>
        Information about {params.users} <br />
        Hello I'm {params.users}
    </div>
  )
}

export default Users