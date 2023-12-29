import './Contact.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [consulta, setConsulta] = useState('')

  const { t } = useTranslation(['global'])

  const enviarConsulta = (e) => {
      e.preventDefault();

      const templateParams = {
          from_name: nombre,
          from_email: email,
          message: consulta
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

      setNombre("");
      setEmail("");
      setConsulta("");
  }


  return (

      <form onSubmit={enviarConsulta} className="contact-form">

          <h3 className='contact-form-h3'> {t('navbar.contactme')} </h3>

          <input type="text" placeholder={t('contactme.fullname')} id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>

          <input type="email" placeholder={t('contactme.email')} id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <textarea value={consulta} placeholder={t('contactme.message')} onChange={(e) => setConsulta(e.target.value)}></textarea>

          <button type="submit" className='contact-form-button'> {t('contactme.query')} </button>
          
          <p> {t('contactme.obligatory')} </p>

      </form>
  )
}

export default Contact