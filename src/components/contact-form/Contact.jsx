import { useState } from 'react';
import FormImg from '../../assets/image/home/st-michele-form.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../style/contact/contact.css'

const Contact = () => {

    //Email form
    const [emailForm, setEmailForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    //Result if message was sent or not
    const [result, setresult] = useState('');

    //Status of while message is being sent
    const [status, setStatus] = useState('Submit');

    //reset form
    const resetEmailForm = () => {
        setEmailForm({name:'', email:'', message: ''});
    }

    //update form value
    const handleEmailFormChange = (event) =>{
        setEmailForm((prevEmailData) => {
            return{
                ...prevEmailData,
                [event.target.name]: event.target.value,
            }
        });

        if (result.length > 0) {
            setresult('');
        }
    }

    //email sending process

    const handleSubmit = async (e) => {
        setResult('');
        e.preventDefault();
        setStatus('Sending...');

        const{ name, email, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        try {
            let response = await fetch ('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(details),
            });
            setStatus('Submit');
            let result = await response.json();

            if(result.status === 'success'){
                setResult('Message Sent!');
                resetEmailForm();
            } else if (result.status === 'fail'){
                alert('Message failed to send.');
            }
        } catch (error) {
            console.log(error);
            setStatus('Submit');
            setresult('Issues with submitting message.');
        }
    }

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
                <form id='contact-form'
                        onSubmit={handleSubmit}
                        method='POST'>
                    <label htmlFor="name" aria-label="Your Name">Insert your name</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Insert your name" 
                        required = {true}
                        value={emailForm.name}
                        onChange={handleEmailFormChange}
                        />

                    <label htmlFor="email" aria-label="Insert your Email" placeholder="Insert your email" required>Insert your email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="youremail@example.com" 
                        required = {true}
                        value={emailForm.email}
                        onChange={handleEmailFormChange}
                         />

                    <label htmlFor="message">Insert your message</label>
                    <textarea 
                        name="message" 
                        aria-label="Insert your Message" 
                        cols="54" 
                        rows="8" 
                        id="message" 
                        required={true}
                        value={emailForm.message}
                        onChange={handleEmailFormChange}
                    />

                    <button className="submit" type='submit'>{status}</button>
                    <h3>{result}</h3>
                </form>
            </section>
        </section>
    )
}

export default Contact
