import './Contact.css'
import { useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');

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
              alert("Consulta enviada")
          })
          .catch(() => {
              alert("Error, intente nuevamente")
          })

      setNombre("");
      setEmail("");
      setConsulta("");
  }


  return (

      <form onSubmit={enviarConsulta} className="contact-form">

          <h3 className='contact-form-h3'>CONTÁCTAME</h3>

          <input type="text" placeholder="NOMBRE COMPLETO *" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>

          <input type="email" placeholder="E-MAIL *" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <textarea value={consulta} placeholder="MENSAJE *" onChange={(e) => setConsulta(e.target.value)}></textarea>

          <button type="submit" className='contact-form-button'>ENVIAR CONSULTA</button>
          
          <p>Campos marcados con (*) obligatorios</p>

      </form>
  )
}

export default Contact