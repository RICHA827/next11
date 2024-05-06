'use client'
import {useState} from 'react'

const AddNewUser = () => {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[email, setEmail] = useState('')

    const AddNewUserHandler = async () => {
       let response =  await fetch('api/users', {
          method: 'POST',
          body: JSON.stringify({name,age,email})
        })

        response = await response.json()
        if(response.ok ) {
          alert("user created successfully")
        } else{
          alert("Not created - error occured")
        }
    }
  return (
    <div>
        <input type = "text" onChange={e => setName(e.target.value)} 
        value={name}
        placeholder="Enter your name" className='ml=2 mr=4'/>
      <br />
        <input type = "number" onChange={e => setAge(e.target.value)} 
        value={age}
        placeholder="Enter your age" className='ml=2 mr=4'/>
      <br />
       <input type = "text" onChange={e => setEmail(e.target.value)} 
        value={email}
        placeholder="Enter your email" className='ml=2 mr=4'/>
      
      <br />
      <button className='bg-black text-white border p-2'
      onClick = {AddNewUserHandler}>Add New user</button>
    </div>
  )
}

export default AddNewUser