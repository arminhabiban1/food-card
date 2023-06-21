import user1 from '../../assets/avatar1.jpg'
import user2 from '../../assets/avatar2.jpg'
import user3 from '../../assets/avatar3.jpg'
import user4 from '../../assets/avatar4.jpg'
import user5 from '../../assets/avatar5.jpg'
import user6 from '../../assets/avatar6.jpg'
import SecondColumn from '../../secondColumn/SecondColumn'
import FirstColumn from '../Firstcolumn/FirstColumn'
import ThirdColumn from '../Thirdcolumn/ThirdColumn'


const Home = () => {
  const users=[
    {
      img:user1,
      name: 'armin'
    },
    {
      img:user2,
      name: 'Alex'
    },
    {
      img:user3,
      name: 'Zack'
    },
    {
      img:user4,
      name: 'armin'
    },
    {
      img:user5,
      name: 'armin'
    },
    {
      img:user6,
      name: 'armin'
    },
    {
      img:user1,
      name: 'armin'
    },
    {
      img:user2,
      name: 'armin'
    }
  ]
  return (
    <div className=' grid grid-cols-3 w-full gap-10 mx-auto justify-center items-center'>
       <FirstColumn users={users}/>
       <SecondColumn users={users} />

    <ThirdColumn users={users}  />
    
    
    </div>
  )
}

export default Home