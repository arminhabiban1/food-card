import {FiSearch} from 'react-icons/fi'
import {HiPlus} from 'react-icons/hi'
import RangeBar from '../RangeBar/RangeBar'
import{AiOutlineArrowRight} from 'react-icons/ai'

const SecondColumn = ({users}) => {
  return (
    <div>
        <div >
        
            <p className="font-[700] text-[18px] text-black text-opacity-[80%]">Near by friends</p>

            <div className="rounded-[25px] mt-[15px] p-[15px] bg-white shadow-lg shadow-[#19545640]">
                <div className="grid grid-cols-4">
                    {
                        users.map((user,i)=>
                        <div key={i} className='flex flex-col justify-center gap-1 items-center'>
                            <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-[15px]">
                                <img className="rounded-[15px] w-full h-full" src={user.img} alt="" />
                            </div>
                            <p className="text-[12px]">{user.name}</p>
                        </div>
                        )
                    }
                </div>
                <div className='flex justify-between items-center pt-[22px] px-[22px]'>
                     <div className='flex items-center h-[40px] gap-2 rounded-[25px] px-[10px] text-[#cacaca] text-[12px] font-[600] shadow-lg shadow-[#00000026]'>
                <FiSearch className='text-x1'/>
                <input type="text" placeholder='Add New Friends' className='text-[#cacaca] py-2 focus:outline-none rounded-[25px]' />
                     </div>
                     <button className='w-[50px] h-[50px] flex justify-center items-center rounded-[15px] bg-primary text-white text-4x1 shadow-md shadow-primary'><HiPlus/></button>
                </div>

            </div>
        </div>
        <div className='mt-[20px]'>
            <div className='flex justify-between items-center'>
                <p className='text-[18px] font-[700]'>Praticipate</p>
                <p className='text-[12px] font-[600]'>6 Person</p>
            </div>
            <div className='bg-white mt-[20px] rounded-[25px] shadow-lg shadow-[#19545640] -[20px]'>
                <div className='px-4 grid grid-cols-1 gap-[10px]'>
                    {
                        users.slice(0,6).map((user,i)=>
                            <div key={i} className='flex items-center gap-[10px]'>
                                <div className='bg-[#d9d9d9] w-[50px] rounded-full'>
                                <img src={user.img} alt=""  className='rounded-full w-[50px] h-[50px]'/>
                                </div>
                                <div className='w-[85%] '><RangeBar user={user}/></div>

                            </div>
                            
                            )
                    }
                </div>
                <div className='mx-5   mt-[15px] border-primary rounded-[10px] p-1 flex items-center gap-[30px] shadow-md shadow-[#fd505299]'>
                    <button className='font-semibold bg-primary p-2 py-3 px-10 text-white rounded-[5px] shadow-lg'>
                        Send bill
                    </button>
                    <div className='flex items-center w-[40%]'>
                        <AiOutlineArrowRight className='text-[25px] text-[#d9d9d9] text-opacity-[40%]'/>
                        <AiOutlineArrowRight className='text-[30px] text-[#d9d9d9] text-opacity-[60%]'/>
                        <AiOutlineArrowRight className='text-[35px] text-[#d9d9d9] text-opacity-[70%]'/>
                        <AiOutlineArrowRight className='text-[40px] text-[#d9d9d9] text-opacity-[80%]'/>
                        <AiOutlineArrowRight className='text-[45px] text-[#d9d9d9] '/>
                        

                        
                        
                        </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default SecondColumn