
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import './index.css'


const App = () => {
  return (
    <div >
    <RouterProvider router={router}/>
    </div>
  )
}

export default App