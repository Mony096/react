import React from 'react'
import { useState } from 'react'

const AddUser = ({ addUser }) => {

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name, userName, email);
    setName("");
    setEmail("");
    setUserName("");
  }
  const getUser = async (id) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const results = await res.json();
        setName(results.name);
        setUserName(results.username);
        setEmail(results.email);
        console.log(results);
        alert(id)
    } catch (error) {
        console.log(error);
    }
};
  return (
    <form onSubmit={handleSubmit} className='w-full bg-white flex items-center justify-center'>
      <label htmlFor="" className='font-semibold'>Name</label><input type="text" value={name} placeholder='Name' className='border m-3 p-1 outline-none  focus:focus:shadow-slate-400 shadow shadow-slate-300 px-3' name='name' onChange={e => setName(e.target.value)} />
      <label htmlFor="" className='font-semibold'>Username</label><input type="text" value={userName} placeholder='UserName' className='border m-3 p-1 outline-none focus:shadow-slate-400 shadow shadow-slate-300 px-3' name='username' onChange={e => setUserName(e.target.value)} />
      <label htmlFor="" className='font-semibold'>Email</label><input type="text" value={email} placeholder='Email' className='border m-3 p-1 outline-none focus:focus:shadow-slate-400 shadow shadow-slate-300 px-3' name='email' onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit} className='text-white bg-slate-600 p-2 px-3 rounded-sm text-sm'>AddUser</button>
    </form>
  )
}

export default AddUser