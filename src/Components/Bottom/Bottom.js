import React from 'react'
import laptop from './image-top-laptops.jpg'
import gaming from './image-gaming-growth.jpg'
import retro from './image-retro-pcs.jpg'
import './Bottom.css'
const Bottom = () => {
  return (
    <div className='bottom'>
        <div className='card'>
            <div className='imgbox'>
            <img src={retro} alt='imag'/>
            </div>
           
            <div className='bottomcard'>
                <h6>01</h6>
                <h5>Reviving Retro Pc</h5>
                <span>What Happens When old PCs are given modern upgrades? </span>
            </div>
        </div>
        <div className='card'>
        <div className='imgbox'>
        <img src={laptop} alt='imag'/>
            </div>
           
            <div className='bottomcard'>
                <h6>02</h6>
                <h5>Top 10 Laptops of 2022</h5>
                <span>Our best picks for Various Needs and budgets? </span>
            </div>
        </div>
        <div className='card'>
            <div className='imgbox'>
            <img src={gaming} alt='imag'/>
            </div>
        
            <div className='bottomcard'>
                <h6>03</h6>
                <h5>The Growth of Gaming</h5>
                <span>How the panademic has sparked fresh opportunities.</span>
            </div>
        </div>
         
    </div>
  )
}

export default Bottom