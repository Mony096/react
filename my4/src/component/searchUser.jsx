import React, { useState } from 'react'

const SearchUser = ({onchage}) => {
  const [search, setSearch] = useState("")
  console.log(search)
  return (
    <div>
        <form action="" className='w-full bg-slate-300 flex justify-center'>
            <input  onChange={(e) => setSearch(e.target.value)} type="text" placeholder ='Search...' className='p-2 px-6 rounded-sm outline-none w-[50%] m-2 shadow shadow-slate-500' onchage={onchage}/>
        </form>
    </div>
  )
}

export default SearchUser