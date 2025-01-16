import { useState } from 'react';
import FormImg from '../../assets/image/home/st-michele-form.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../style/contact/contact.css'

const Contact = () => {

    return (
        <section className="contact-wrapper">
            <section className="contact-container">
                <h2 className="contact-container-heading">
                    We're ready to help you!
                </h2>
                <p className="contact-container-info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Molestias non vero, pariatur dicta incidunt corporis doloribus 
                    esse eaque reprehenderit minus officiis quo nulla tempore voluptate 
                    debitis perspiciatis mollitia cum deserunt.
                </p>
                <section className="adress-contact-container">
                    <div className="adress">
                        <FontAwesomeIcon className="icon" icon={faLocation} size="2x" />
                        <p className="info">Alghero (SS) - Sardinia</p>
                        <p className="info adress">Adress xyz 82</p>
                    </div>
                    <div className="phone">
                        <FontAwesomeIcon className="icon" icon={faPhone} size="2x" />
                        <p className="info">+39 340123456789</p>
                    </div>
                </section>

            </section>
            <section className="contact-container-image">
                <img src={FormImg} alt="Dome of San Michele Alghero " />
            </section>
            <section className="contact-container-form">
                <form id='' method=''>
                    <label htmlFor="name" aria-label="Your Name">Insert your name</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Insert your name" 
                        required
                        />

                    <label htmlFor="email" aria-label="Insert your Email" placeholder="Insert your email" required>Insert your email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="youremail@example.com" 
                        required
                         />

                    <label htmlFor="message">Insert your message</label>
                    <textarea 
                        name="message" 
                        aria-label="Insert your Message" 
                        cols="54" 
                        rows="8" 
                        id="message" 
                        required
                    />

                    <button className="submit" type='submit'>Submit</button>
                </form>
            </section>
        </section>
    )
}

export default Contact
