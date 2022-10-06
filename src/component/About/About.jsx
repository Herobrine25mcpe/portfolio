import React from 'react'
import './About.css';
import dp from '../../img/tarun.jpeg'
const About = () =>{
    return(

         <div className="about ">
            <div className="a-left">

                <span>About Me</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsum. Quibusdam minima rem est cumque veniam. Sequi, accusamus vero, similique maiores dolor inventore, suscipit eaque deleniti cum recusandae consequatur repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eveniet nisi accusantium sunt deleniti nesciunt iusto quasi. Amet, laudantium vitae sunt, odit ipsam temporibus tempore a sapiente sequi distinctio exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at et saepe asperiores atque rerum tempore tenetur, inventore vitae ea repudiandae laudantium nemo recusandae sunt assumenda expedita eos, aliquid ducimus. 
                </span>
            </div>

            <div className="a-right">
            
                <img className="a-image"src={dp} alt="" width={"100%"} />
            </div>

         </div>

    )
}

export default About