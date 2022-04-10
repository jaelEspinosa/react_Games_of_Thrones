
import "./GoBack.scss"
import vector from '../img/Vector.svg'
const GoBack =()=>{
    return <div className="vector-contain">
        <img  className='vector-img' src = {vector} alt="atras"></img>
        <span className='volver'>volver</span>
        
    </div>
}
export default GoBack