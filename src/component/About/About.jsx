import React from 'react'
import './About.css';
import dp from '../../img/tarun.jpeg'
const About = () =>{
    return(

         <div className="about ">
            <div className="a-left">

                <span>About Me</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dolores, pariatur ullam inventore fugit cum debitis maiores in nulla recusandae impedit aliquid doloribus. Provident, aliquid? Aliquam laboriosam distinctio minima eum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dolores, pariatur ullam inventore fugit cum debitis maiores in nulla recusandae impedit aliquid doloribus. Provident, aliquid? Aliquam laboriosam distinctio minima eum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dolores, pariatur ullam inventore fugit cum debitis maiores in nulla recusandae impedit aliquid doloribus. Provident, aliquid? Aliquam laboriosam distinctio minima eum!
                </span>
            </div>

            <div className="a-right">
            
                <img className="a-image"src={dp} alt="" />
            </div>

         </div>

    )
}

export default About