import './Contact.css'
import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'

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

    const ref = useRef(null)
    const userView = useInView(ref, {
        once: true
    })

    return (
        <section id="contact">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0, }}
                animate={userView ? { opacity: 1, scale: 1, transition: { duration: 1 } } : ""}
                className="contact-container">
                <form onSubmit={sendQuery} className="contact-form">

                    <h3 className='contact-form-h3'> {t('contacme.title')} </h3>

                    <input type="text" placeholder={t('contactme.fullname')} id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}></input>

                    <input type="email" placeholder={t('contactme.email')} id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <textarea placeholder={t('contactme.message')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                    <button type="submit" className='contact-form-button'> {t('contactme.query')} </button>

                    <p className='contact-form-p'> {t('contactme.obligatory')} </p>

                </form>
            </motion.div>
        </section>
    )
}

export default Contact