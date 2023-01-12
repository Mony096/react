
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Card from './component/card';
function App() {
  const [detail, setDetail] = useState([]);
  const data = useRef(2)
  function set() {
    data.current + 1;
  };
  const getApi = async()=>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums');
      const results = await res.json();
      setDetail(results);
      // console.log(results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
      getApi();
  }, [])
  return (
    <>
    <div className='container'>
      {
       detail.length == 0 ? <h1 className='loading'>Loading</h1> : detail.map((item,index)=> <Card 
       item={item}
       key={index}
       />
     )
      }
    </div>
    </>
  );
}

export default App;
