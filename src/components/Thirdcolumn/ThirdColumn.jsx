import user1 from '../../assets/user1.webp'
import UnpaidChart from '../../Unpaidchart/UnpaidChart';
import PaidChart from '../../PaidChart/PaidChart';
const ThirdColumn = ({users}) => {
  return (
    <>
      <div className="flex flex-col h-full px-[10px]">
        <div>
          <p className="font[700] text-[18px] text-black text-opacity-[80%]">
            
            Split Request
          </p>

          <div className='flex flex-col justify-center items-center rounded-[25px] mt-[15px] bg-white shadow-lg shadow-[#19545640]'>
            <div className='border-2 border-yellow-400 w-[128px] h-[128px] p-1 rounded-full flex justify-center items-center'>
                <img src={user1} alt="" className='w-full h-full rounded-full' />
            </div>
            <div className='text-center px-16 py-[12px]'>
                <p className='text-[18px]'>Hey, <span className='font-[600]'>Armin!</span></p>
                <p className='text-[14px]'> Tommy requested ypou for a Split bill payment of <span className='text-primary font-[600]'>$22</span>From Burger & Drinks</p>
            </div>
            <div className='w-full flex flex-col gap-[8px] pt-[15px] text-18px px-[8px] '>
                <p className='flex justify-between items-center'>SpliteBill <span>$72.19</span></p>
                <p className='flex justify-between items-center'>TotalBill <span>$80</span></p>
                <p className='flex justify-between items-center'>Items <span className='text-primary font-[600]'>Details</span></p>
            </div>
            <div className='flex gap-8 pt-5 p-3 '>
                <button className='font-semibold  text-white bg-primary px-8 py-2 rounded-lg shadow-lg shadow-[#fd505299]'>Decline</button>
                <button className='font-semibold text-white bg-[#7adbf8] px-8 py-2 rounded-lg shadow-lg shadow-[#7adbf8ad]'>Accept</button>


            </div>
          </div>
        </div>

        <div className='mt-[20px]'>
            <p className='font-[700] text-[18px] text-black text-opacity-[80%]'>Pending Bills</p>
            <div className='flex flex-col rounded-[25px] mt-[20px] bg-white shadow-lg shadow-[#19545240] px-[15px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[15px] font-[600]'>Chiken Fry</p>
                    <p className='text-[12px]'> Total Payment $440.00</p>
                    <div className='flex ml-[12px] mt-[5px]'>
                        {
                            users.slice(0,3).map((user,i)=>(
                            
                            <div key={i} className='flex flex-col justify-center items-center'>
                                <div className='  bg-[#d9d9d9] border w-[50px] h-[50px] rounded-full m1-[-12px]'>
                                    <img src={user.img} alt="" className='rounded-full w-full h-full' />
                                </div>
                            </div>

                            ))
                        }
                    </div>
                </div>
                <div className='w-[40%]'>
                    <UnpaidChart/>

                    
                </div>
                  
            </div>
            <div className='flex justify-between items-center'>
    <div>
        <p className='text-[15px] font-[600]'>Chiken Wings</p>
        <p className='text-[12px]'> Total Payment $220.00</p>
        <div className='flex ml-[12px] mt-[5px]'>
            {
                users.slice(0,3).map((user,i)=>(
                
                <div key={i} className='flex flex-col justify-center items-center'>
                    <div className='  bg-[#d9d9d9] border w-[50px] h-[50px] rounded-full m1-[-12px]'>
                        <img src={user.img} alt="" className='rounded-full w-full h-full' />
                    </div>
                </div>
                ))
            }
        </div>
    </div>
    <div className='w-[40%]'>
        <PaidChart/>
        
    </div>
      
</div>
            
            


            </div>
            
        </div>
      </div>
    </>
  );
};

export default ThirdColumn;
