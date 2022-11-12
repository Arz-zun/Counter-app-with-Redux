import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increament,decreament} from "./Redux/Action/Counter";
import { Login,Logout } from './Redux/Action/isLogin';
import Navbar from './Component/Navbar';

function App() {

  const dispatch=useDispatch();
  const newNum=5;
  const logout=false;
  const login=true;
  return (
    <>
    <Navbar/>
    <div className='flex justify-center gap-5 text-white w-full' >
      <button onClick={()=>dispatch(increament(newNum))} className=' bg-red-400 p-2 rounded-2xl'>increament</button>
      <button onClick={()=>dispatch(decreament())} className=' bg-red-400 p-2 rounded-2xl'>Decreament</button>
      <button onClick={()=>dispatch(Login(login))} className=' bg-red-400 p-2 rounded-2xl'>Login</button>
      <button onClick={()=>dispatch(Logout(logout))} className=' bg-red-400 p-2 rounded-2xl'>Logout</button>
  </div>
  </>
  );
}

export default App;
