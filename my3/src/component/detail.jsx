import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Detail = ({allUser, setAllUser}) => {

    const { id } = useParams();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const getUser = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            const results = await res.json();
            setName(results.name);
            setUserName(results.username);
            setEmail(results.email);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    };
    const updateUser = async () => {
        const data = {
            name: name,
            username : userName,
            email : email ,
        }
        console.log(allUser)
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users' + id, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const results = await res.json();
         
            setName('');
            setUserName('');
            setEmail('');
            console.log(name)
            console.log(results);

            // let temp = allUser?.map((e) => {
            //     if (e?.id === id) {
            //         return data;
            //     }

            //     return e;
            // })
            
            // console.log(temp)
            // setAllUser(temp)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUser();

    }, [])
    return (
        <div className='bg-slate-600 pb-[100px] flex items-center justify-center flex-col h-screen'>
            <input type="text" value={name} placeholder='Name' className='w-[50%] p-3 rounded-[10px] outline-none m-2' onChange={(e) => setName(e.target.value)} />
            <input type="text" value={userName} placeholder='Email' className='w-[50%] p-3 rounded-[10px] outline-none m-2' onChange={(e) => setUserName(e.target.value)} />
            <input type="text" value={email} placeholder='Body' className='w-[50%] p-3 rounded-[10px] outline-none m-2' onChange={(e) => setEmail(e.target.value)} />
            <button className='w-[50%] p-3 rounded-[10px] outline-none m-2 text-black bg-slate-400 font-bold' onClick={updateUser}>Update</button>
        </div>
    )
}

export default Detail