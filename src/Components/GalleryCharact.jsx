import { Link } from 'react-router-dom'
import './GalleryCharact.scss'


const GalleryCharact = ({data})=>{
    
    return <div className='gallery-contain'>
        console.log(data.name)
       <div className='text' >
       
        {data.image && <Link to = {`/characters/${data.name}`}> <img className='character' src={data.image} alt={data.actor}></img></Link>}
         <p className='character-name'>{data.name}</p>
       </div>
      

    </div>
}
export default GalleryCharact


{/* <img onError={this.addDefaultSrc} className="img-responsive" src={newsImage} alt={headline}/>

//in your componentaddDefaultSrc(ev){
  ev.target.src = 'some default image url'
} */}