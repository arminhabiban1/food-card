import {GoSearch} from 'react-icons/go'
import {RiNotification4Fill} from 'react-icons/ri'
import {RxDotFilled} from 'react-icons/rx'
import {BsChatLeftDots} from 'react-icons/bs'

import {FcBusinessman} from 'react-icons/fc'
const Navbar = () => {
  return (
    <div className="flex justify-between py-5 items-center w-full ">
      <h1 className="text-[30px] font-[600] font-mont">Hello,Armin Habiban</h1>
      <div className='flex items-center  w-[325px] h-[41px] rounded-[55px] px-[20px] shadow-md shadow-[#19545659] bg-white'>
        <input type="text" placeholder="Search" className="text-[#d9d9d9] text-[15px] font-[600] focus:outline-none bg-transparent w-[95%]" />
        <GoSearch className='text-[#d9d9d9]'/>
      </div>
      <div className='flex gap-6'>
        <div className='p-3 rounded-[15px] bg-white relative'>
          <RiNotification4Fill className='text-2x1'/>
          <RxDotFilled className='absolute top-[3px] right-[3px] text-lg text-primary'/>
        </div>
        <div className='p-3 rounded-[15px] bg-white'>
        <BsChatLeftDots className='text-2x1'/>
        
        </div>
        <div className='p-3 rounded-[15px] bg-white '>
        <FcBusinessman className='text-2x1'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar