import React, { useRef, useState } from 'react'


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("");
  const updateid = useRef()

 
  const addTodo = () => {
    if (todo !== "") {
      const item = {
        id: todos.length + 1,
        // id : new Date().getTime().toString(),
        todoName: todo,
     

      };

      if (updateid.current !== undefined) {
        let temp = todos.map((e) => {
          if (e?.id === updateid.current) {
            return {
              ...e,
              todoName : todo
            }
          }
          return e;
        })

        setTodos(temp);
      }

      console.log(item.id);
      const newTodo = [...todos, item];
      setTodos(newTodo);
    }
    
  }
  //plov muy
  // const deleteItem =(itemName)=>{
  //   const newItem = todos.filter((item)=>{
  //     if(item === itemName){
  //       return false;
  //     }else{
  //       return true;
  //     }
  //setTodos(newItem)
  //   });
  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  };

  const edit = (id, index)=>{
    updateid.current = id;
    let temp = todos.map((e) => {
      if (e?.id === updateid.current) {
        return {
          ...e,
          todoName : todo
        }
      }
      return e;
    })

    setTodos(temp);
  }
  // const edit = (id) => {
  //   setTodos(
  //     todos.map(item => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           complete: true
  //         }

  //       }
  //       return item;
  //     })
  //   )
  // }
  return (
    <>
      <div className='w-[300px] mx-auto mt-[100px] bg-slate-300 h-[500px] p-3'>
        <input onChange={(event) => setTodo(event.target.value)} className='border' />
        <button onClick={addTodo}>Add todo</button>
        {
          todos.map((item, index) => {
            return (
              <div className='flex justify-between bg-slate-400 p-3 my-3'>
                <span>{item.todoName}</span>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <button onClick={() => edit(item.id, index)}>update</button>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
