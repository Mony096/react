import React from 'react'
import '../App.css';

const Card = ({item}) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ua9GoK6d7H_1zMI1dwSvHf0bvWaipI5A7Q&usqp=CAU" alt="" />
        <h3>{item?.id}</h3>
        <p>{item?.title}</p>
        <button>Click ToAdd</button>
    </div>
  )
}

export default Card