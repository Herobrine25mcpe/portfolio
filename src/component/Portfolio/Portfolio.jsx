import React from 'react'
import './Portfolio.css';
import{Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import im1 from "../../img/im (1).jpg";
import im2 from "../../img/im2.jpg";
import im6 from "../../img/im (6).png";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(

         <div className="portfolio">
           

                <span style={{ color: darkMode ? "white" : "" }}>Portfolio</span>
                <span>Recent projects
                </span>

                <Swiper spaceBetween={35} slidesPerView={3} grabCursor={true} className='portfolio-slider'> 
                    <SwiperSlide>
                        <img src={im1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im6} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={im6} alt="" />
                    </SwiperSlide>

                </Swiper>

         </div>

    )
}

export default Portfolio

