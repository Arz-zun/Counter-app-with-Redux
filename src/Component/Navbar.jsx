import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const number=useSelector((state)=>state.Counter);
  const Log=useSelector((state)=>state.isLogin);

   
  return (
    <div className='bg-blue-600 flex justify-end pr-5 text-xl text-white '>
       {number}
       {Log===true?<h1>Loging</h1>:<h1>Logout</h1>}
    </div>
  )
}

export default Navbar