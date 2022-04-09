import React, { useState } from 'react'
import './Loading.css'

function Loading({isLoading}) {
  
  return (<>
      {isLoading && <div className='c-loading'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
      </>)
}

export default Loading