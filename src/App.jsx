import ProfilePhoto  from './Component/Profile/ProfilePhoto'
import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import image from './Component/Profile/avatar.jpg'
import './App.css'

function App() {
  

  return (
    <div className="flex" >
   <ProfilePhoto img={image} />
   <FullName />
   <Address/>
    </div>
  )
}

export default App
