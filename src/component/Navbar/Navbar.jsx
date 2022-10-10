import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
const Navbar = () =>{

    return (

        <div className='n-wrapper'>            
            <div className="n-left">
                <div className='n-name'>Tarun</div>
                <Toggle/>

            </div>
            <div className="n-right">
                <div className='n-list'>
                    <ul style={{listStyleType:'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <button className='button n-button' >
                    Socials
                </button>
            </div>



        </div>
    )
}

export default Navbar