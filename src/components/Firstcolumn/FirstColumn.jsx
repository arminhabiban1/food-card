import burger1 from '../../assets/burger1.jpg'
import {HiDotsVertical} from 'react-icons/hi'
import burger2 from '../../assets/burger2.jpeg'


const FirstColumn = ({users}) => {
  return (
    <>
    <div className=" w-full h-full px-[12px]">
        <div className="  bg-primary rounded-[25px] p-[12px] shadow-1g shadow-primary">
            <div className="bg-white flex flex-col items-center rounded-t-[25px] rounded-b1-[25px] w-full p-[20px]">


                <div className="flex justify-center">
                    <img src={burger1}alt="" className='w-[80%]' />
                </div>
                <div className='flex justify-between w-full mt-4'>
                    <p className='text-[14px] font-[700]'>Double burger</p>
                    <p className='text-[14px] font-[600]'>total Bill:<br /><span className='font-[800]'>20$</span></p>
                </div>
            </div>
            <div className='flex justify-between items-center bg-white rounded-b1-[25px] h-full'>
            <div className='w-[60%] bg-primary h-full rounded-tr-[25px] p-[10px]'>
              <p className='font[600] text-[20px] text-white'> split with</p>
              <div className='flex m1-[180px] mt-2'>
                {
                    users.slice(0,4).map((user,i)=>
                    <div key={i} className=' bg-[#d9d9d9] w-[40px] h-[40px] m1-[-10px] rounded-full'>
                        <img className='rounded-full w-full h-full' src={user.img} alt="" />

                    </div> )
                    
                }
              </div>
              </div>
              <div className='bg-primary w-[40%] h-[98px] text-right' >
                <div className='h-full w-full flex justify-center items-center bg-white rounded-b-[30px]' >
                    <button className='text-black text-[12px] text-opacity-[680%] font-[700]
                     bg-[#7adbf8] shadow-x1 py-2 px-5 rounded-2xl'>Shop Now</button>
                </div>
              </div>
            </div>
        </div>





        <div className='pt-[30px]'>
            <p className='text-[25px] font-[600] text-black text-opacity-[80%]'> Recent split</p>
            <div className='bg-white  p-[20px] rounded-lg mt-[20px] shadow-md shadow-offset-2 shadow-white-500'>
                <div className='flex items-center justify-between pv-[20px]  '>
                    <p className='font-[800] text-[18px] text-black text-opacity-[70%]'>Burger combo</p>
                    <HiDotsVertical className='text-x1 text-[#cccccc]'/>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='w-[120%] h-full'  >
                        <img  src={burger2} alt="" />
                    </div>
                    <div className='grid grid-cols-4 gap-y-2'>
                        {
                            users.map((user,i)=><div key={i} className= ' w-[40px] h-[40px] rounded-2xl bg-[#d9d9d] flex justify-center items-center'>
                                <img className='rounded-2xl' src={user.img} alt="" />

                            </div>)
                        }
                    </div>
                </div>
                
                
                
                
            </div>
        
        </div>



    </div>
    
    
    
    </>
  )
}

export default FirstColumn;