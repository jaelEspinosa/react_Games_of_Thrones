
import { useLocation, useParams } from 'react-router-dom'
import  vector  from '../img/Vector.png'
import './Goback.scss'


const Goback = ()=>{
    const {name} = useParams();
    const location = useLocation();
    return <>
        <div className='vector-contain'>
        <img  className='vector-img' src = {vector} alt="atras"></img>
        <span className='volver'>volver</span>

    </div>
    </>
}

export default Goback
