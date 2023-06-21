import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Navbar from '../Layout/Navbar/Navbar'


const Main = () => {
  return (
    <div className='flex pt-[50px] pr-[50px] relative h-screen'>
    <div><Menu/>
    </div>
    
    <div className='w-full'>
      <Navbar/>
      <Outlet/>
    </div>
    </div>
   
  )
}

export default Main