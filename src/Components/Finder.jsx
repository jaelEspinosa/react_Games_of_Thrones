import React, { useContext } from 'react'
import find from '../img/search.svg'
import { useLocation, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FindContext } from '../context/FindContext'


export const Finder = () => {
  const {register, watch} = useForm()
  const location = useLocation()
  const {setFind}=useContext(FindContext)
  const {name} = useParams();
  

  setFind(watch('NewFind'))
  return (
    <>
   {location.pathname=== '/characters' || location.pathname === "/houses"  ? <div className='find-contain'>
    <img className='find-img' src = {find} alt ='find'></img>
    <input className='finder' type="text" placeholder='buscar'{... register('NewFind')}></input>
         
    </div>:null}
    </>
  )
}
