import React from 'react'
import './Intro.css'
import About from '../../img/about.png'
const Intro =()=>{
    return(
        <div className='intro'>
            <div className='i-left'>

                <div className='i-name'>
                    <span> Hey I am </span>
                    <span> Tarun Singh</span>                    
                    <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, adipisci. Harum beatae, asperiores at architecto dicta adipisci sit possimus omnis magni expedita sunt odit, exercitationem amet dolore ipsa eligendi. Sunt.</span> 
                </div>
                <button className=' button i-button'>Contact me</button>
            </div>
            <div className='i-right'>
                <div className='i-image'>
                    <img src={About} alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Intro