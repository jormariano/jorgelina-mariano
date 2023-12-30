import './Contact.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { t } = useTranslation(['global'])

  const sendQuery = (e) => {
      e.preventDefault();

      const templateParams = {
          from_name: fullName,
          from_email: email,
          message: message
      };

      emailjs.send(
          "service_gqk722n",
          "template_tshjpb7",
          templateParams,
          "E4zHwwYn3G-EMcNrP"
      )
          .then(() => {
              alert(t('contactme.querysent'))
          })
          .catch(() => {
              alert(t('contactme.error'))
          })

      setFullName("");
      setEmail("");
      setMessage("");
  }


  return (

      <form onSubmit={sendQuery} className="contact-form">

          <h3 className='contact-form-h3'> {t('navbar.contactme')} </h3>

          <input type="text" placeholder={t('contactme.fullname')} id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}></input>

          <input type="email" placeholder={t('contactme.email')} id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <textarea placeholder={t('contactme.message')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <button type="submit" className='contact-form-button'> {t('contactme.query')} </button>
          
          <p> {t('contactme.obligatory')} </p>

      </form>
  )
}

export default Contact