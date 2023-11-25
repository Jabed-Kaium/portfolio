import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fobdmp3', 'template_x7qx8qv', form.current, 'skfq2eVvhCHdwTjzd')
        .then((result) => {
            console.log(result.text);
            console.log('Message sent');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='Contact'>
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6">
                        <div className="email-form">
                            <h4 className='text-center'>Sent me a message</h4>
                            <form ref={form} onSubmit={sendEmail} className='form-elements mx-auto mt-4'>
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder='Enter your name'/>
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder='example@xyz.com' />
                                <label>Message</label>
                                <textarea name="message" placeholder='Your message' />
                                <input className='btn btn-success my-3' type="submit" value="Send Message" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-center'>Contact Me</h1>
                        <p className='text-center mt-5'><FiPhone /> +8801680710097</p>
                        <p className='text-center mt-3'><CiMail /> jabedkaium@gmail.com</p>
                        <h5 className='text-center my-4'>Follow me on</h5>
                        <div className="social mb-5">
                            <a href="https://www.facebook.com/jabed.kaiumii/" target='_blank' rel='noreferrer'><FaFacebook size="2rem" /></a>
                            <a href="https://www.linkedin.com/in/jabed-kaium-985b051a9/" target='_blank' rel='noreferrer'><FaLinkedin size="2rem" /></a>
                            <a href="https://github.com/Jabed-Kaium" target='_blank' rel='noreferrer'><FaGithub size="2rem" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact