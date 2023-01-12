import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BsCalendar3 } from 'react-icons/bs'
import { BsJournalBookmark } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { IoMdTimer } from 'react-icons/io'
import { BiMenu } from 'react-icons/bi'
import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SildeBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(0)


    const nav = useNavigate()

    const click =(index,item)=>{
        setActive(index)
        nav(item.path)
    } 
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const menuItem = [
        {
            path: "/",
            name: "dashBoard",
            icon: <AiOutlineDashboard />
        },
        {
            path: "/carlender",
            name: "carlender",
            icon: <BsCalendar3 />
        },
        {
            path: "/enrollman",
            name: "enrollman",
            icon: <BsCalendar3 />
        },
        {
            path: "/ptoLibaility",
            name: "ptoLibaility",
            icon: <BsJournalBookmark />
        },
        {
            path: "/timeUse",
            name: "timeUse",
            icon: <BiTimeFive />
        },
        {
            path: "/timeConvert",
            name: "timeConvert",
            icon: <IoMdTimer />
        }
    ]
    return (
        <div className='container flex'>
            <div style={{ width: isOpen ? "250px" : "60px" }} className=' shadow-black shadow-2xl transition-all side-bar w-[250px bg-white h-screen'>
                <div className='top-section flex flex-col item-center py-[20px] px-[25px]'>
                    <div style={{ display: isOpen ? "none" : "block", marginLeft: isOpen ? "180px" : "-10px", marginBottom: isOpen ? "" : "50px" }} className=' cursor-pointer text-2xl font-bold ml-7' onClick={toggle}>
                        <BiMenu />
                    </div>
                    <div style={{ display: isOpen ? 'block' : "none" }} onClick={toggle}>
                        <img className='w-[80%] h-[30px] mt-[30px] cursor-pointer' src="data:image/png;base64,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" alt="" />
                    </div>
                    <div style={{ display: isOpen ? 'none' : "block", position: isOpen ? 'absolute' : 'absolute', left: isOpen ? '' : '10px', top: isOpen ? '' : "65px" }}>
                        <img className='h-[35px] rounded-[50%]' src="data:image/png;base64,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" alt="" />
                    </div>
                    <div style={{ display: isOpen ? 'block' : "none" }} className='cursor-pointer w-[200px] mt-[50px] py-[5px] px-1 rounded-2xl bg-slate-200'>
                        <div className='bg-white text-sm text-purple-600 rounded-xl w-[50%] flex justify-center float-left p-1 px-2'><span>Admin</span></div>
                        <div className=' rounded-md text-sm w-[50%] float-left p-1 flex justify-center'><span>Emplyee</span></div>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <li key={index} onClick={()=>click(index, item)} className={`${active === index ?' bg-blue-300 border-r-blue-500 border-r-[5px]': ''} hover:text-white cursor-pointer flex hover:border-r-[5px] border-r-blue-500 text-black py-[15px] px-[20px] gap-[15px] items-center transition-all hover:bg-blue-300`}>
                            <div>{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none", }} >{item.name}</div>
                        </li>
                    ))
                }
            </div>
            <main className='bg-slate-400 w-full p-[20px]'>{children}</main>
        </div>
    )
}

export default SildeBar