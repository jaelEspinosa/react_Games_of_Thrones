import './GalleryCharact.scss'


const GalleryCharact = ({data})=>{
    
    return <div className='gallery-contain'>
     
       <div >
       {/* <SimpleBar style ={{ maxHeight : 300}}></SimpleBar> */}
          <img className='character' src={data.image} alt={data.actor}></img>
      
       </div>
      

    </div>
}
export default GalleryCharact