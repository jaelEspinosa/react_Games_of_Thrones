



import { useLocation } from "react-router-dom"
import Group   from  "../img/Group.svg"
import './GoHome.scss'

const GoHome = ()=>{
    const location = useLocation()
    console.log('estoy aki',location.pathname)
    return <div>
        
      {location.pathname !== '/' ? <img className="home" src = {Group} alt ="home"></img>: null}
    </div>
}

export default GoHome