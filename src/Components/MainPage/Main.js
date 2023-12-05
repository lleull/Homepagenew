import React from 'react'
import './main.css'
import image from './image1.jpg'
import Bottom from '../Bottom/Bottom'
const Main = () => {
  return (
    <div className='mainpage'>
        <div className='main'>
        <div className='left'>
        <img src={image} alt='data'/>
            <div className='leftbottom'>
         
            <div className='bright'>
                <h1 className='head'>The Bright Future Of Web 3.0?</h1>
            </div>
            <div className='leftbox'>
                <p>we dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But it really fulfilling it promise</p>
                <button className='read'> READ MORE</button>
            </div>

            </div>
         
        </div>
        <div className='right'>
            <div className='rightin'>
            <h2>NEW</h2>
            <div className='righttext'>
            <h3>Hydrogen Vs Electric Cars</h3>
                  <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
            </div>
            <div className='righttext'> 
            <h3>The Downsides of AI Artistry?</h3>
                  <p>What are the possible adverse effects of one-demand AI image Generation?</p>
            </div>
            <div className='righttext'>
            <h3>Is VC Funding Drying Up</h3>
                  <p>Private funding by VC firms is down 50% YOY, We take a look at what tahe means</p>
            </div>
            </div>
           
             
                  
        </div>
        </div>
       
        <Bottom/>

    </div>
  )
}

export default Main