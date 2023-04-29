import { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RxTwitterLogo } from 'react-icons/rx'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6fjm86w', 'template_9hdperg', form.current, 'U5nevi2ZQzl-Fdo7o')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>gabiicarniel@gmail.com</h5>
            <a href="mailto:gabiicarniel@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact-option">
            <RxTwitterLogo className='contact-option-icon' />
            <h4>Twitter</h4>
            <h5>gabislera</h5>
            <a href="https://twitter.com/gabislera" target='_blank'>Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            <h5>51 996682400</h5>
            <a href="https://api.whatsapp.com/send?phone=5551996682408" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button className='btn' type='sumbit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact