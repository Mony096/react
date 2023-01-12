import React,{useState} from 'react'

const AddUser = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const addUser = async () => {
        const data = {
            name: name,
            username : userName,
            email : email 
        }
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const results = await res.json();
       
            console.log(results);
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
          <div className='bg-slate-600 pb-[100px] flex items-center justify-center flex-col h-screen'>
            <input type="text" placeholder='Name' className='border border-cyan-600 w-[50%] p-3 rounded-[10px] outline-none m-2 focus:outline-zinc-800' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Email' className='w-[50%] p-3 rounded-[10px] outline-none m-2' onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder='Body' className='w-[50%] p-3 rounded-[10px] outline-none m-2' onChange={(e) => setEmail(e.target.value)} />
            <button className='w-[50%] p-3 rounded-[10px] outline-none m-2 text-black bg-slate-400 font-bold' onClick={addUser}>AddUser</button>
        </div>
    </div>
  )
}

export default AddUser