import React from 'react'
import { Routes,Route, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import Hollywood from './Components/Hollywood'
import Tollywood from './Components/Tollywood'
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import NotFound from './Components/NotFound'
import Details from './Components/Details'

function Navbar() {
  return (
    <div>

      <h1 className='thesiren'><span className='the'>The</span><span className='siren'>Siren</span></h1>
     
       <div className='link'>
        
        <NavLink to="/" className='link' style={({isActive})=>{
          return {
            color: isActive? "green": "blue"
          }
        }}>Home</NavLink>

        <NavLink to="/tollywood" className='link' style={({isActive})=>{
          return {
            color: isActive? "green": "blue"
          }}}>Tollywood</NavLink>

       <NavLink to="/hollywood" className='link' style={({isActive})=>{
          return {
            color: isActive? "green": "blue"
          }}}>Hollywood</NavLink>

       <NavLink to="/fitness" className='link' style={({isActive})=>{
          return {
            color: isActive? "green": "blue"
          }}}>Fitness</NavLink>

        <NavLink to="/food" className='link' style={({isActive})=>{
          return {
            color: isActive? "green": "blue"
          }}}>Food</NavLink>

        </div>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/tollywood" element={<Tollywood/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default Navbar