import './GalleryCharact.scss'

const GalleryCharact = ({data})=>{
    
    return <div className='gallery-contain'>
     
       <div >
          <img className='character' src={data.image} alt={data.actor}></img>
       </div>
      

    </div>
}
export default GalleryCharact