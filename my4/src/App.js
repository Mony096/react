import React,{useState,useEffect} from 'react';
import './App.css';
import UserList from './component/userList';
import AddUser from './component/addUser';
import 'antd/dist/reset.css';
function App() {
  
  const [allUser, setAllUser] = useState([]);
  const [search, setSearch] = useState("")

  console.log(search)
  const getAllUser = async()=>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const results = await res.json();
      setAllUser(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }
  const addUser = async(name,username,email)=>{
    const data = {
      name: name,
      username : username,
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
      setAllUser((allUser) => [data,...allUser]);
      
  } catch (error) {
      console.log(error);
  }
  }
  const deleteUser = async(id)=>{
  try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts'+id,{
          method: 'DELETE',
      });
      const results = await res.json();
 
      console.log(results);
     const newDelete = allUser.filter((user)=> user.id !== id);
     setAllUser(newDelete);
  } catch (error) {
      console.log(error);
  }
  }
  
  useEffect(() => {
    getAllUser();
}, [])

  return (
   <>
    <h1 className='w-full p-[30px] bg-slate-800 text-center text-white text-2xl font-bold'>React CRUD With JSON Placeholder</h1>
    <AddUser addUser ={addUser}/>
    <form action="" className='w-full bg-slate-300 flex justify-center'>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder ='Search...' className='p-2 px-6 rounded-sm outline-none w-[50%] m-2 shadow shadow-slate-500'/>
        </form>
    <div className='bg-slate-800 grid grid-cols-2 p-[50px] gap-5 auto-rows-max'>
           {
            allUser.length === 0 ? <h1>Loading...</h1>: 
            allUser.filter((user)=>{
              return search.toLowerCase() === ''? user : user.name.toLowerCase().includes(search)
            }).map((user)=>(
             <UserList id={user.id} key={user.id} name={user.name} username={user.username} email={user.email} deleteUser={deleteUser}/>
            ))
           }
        </div>
   </>
  );
}

export default App;
