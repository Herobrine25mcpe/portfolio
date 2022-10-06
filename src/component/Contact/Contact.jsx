import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className="c-left">
            <span>Get in touch </span>
            <br/>
            <span>Contact me</span>
        </div>

        <div className="c-right">
            <form action="">
                <input type="text" name="user_name" className='user' placeholder='Name' />

                <input type="email" name="user_email" className='user' placeholder='Email' />

                <textarea name="message" className="user" placeholder='Message'></textarea>

                <input type="submit" value="Send" className='button' />

            </form>
            
        </div>

    </div>
  )
}

export default Contact