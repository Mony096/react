
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './component/addUser';
import Detail from './component/detail';
import List from './component/list';
import React from 'react';

function App() {
  const [allUser, setAllUser] = React.useState([]);
  return (
    <>
    <h1 className='block p-5 text-center text-3xl font-bold bg-slate-500 text-white'>React CRUD Oparation</h1>
   
      {
        <Routes>
          <Route path='/' element={<List allUser ={allUser} setAllUser ={setAllUser}/>}></Route>
          <Route path='/detail/:id' element={<Detail allUser ={allUser} setAllUser ={setAllUser}/>}></Route>
          <Route path='/addUser' element={<AddUser/>}></Route>
        </Routes>
      }
    
    </>
  );
}

export default App;
