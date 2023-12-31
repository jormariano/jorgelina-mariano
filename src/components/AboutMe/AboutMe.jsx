import './AboutMe.css'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import PdfFileEn from '../../pdf/CVJorgelinaMariano_es.pdf'
import PdfFileEs from '../../pdf/CVJorgelinaMariano_en.pdf'

const AboutMe = () => {

    const { t, i18n } = useTranslation(['global'])

    const imgPhoto = './img/personal-photo1.png'

    const getLanguageSuffix = () => {

        return i18n.language === 'en' ? '_en' : '_es';
    }

    const imgGitHub = "../../icon/footer-github.png"
    const imgLinkedIn = "../../icon/footer-linkedin.png"

    const viewPdf = () => {
        const pdfFileName = `CVJorgelinaMariano${getLanguageSuffix()}.pdf`
        const pdfFileUrl = i18n.language === 'en' ? PdfFileEs : PdfFileEn;

        window.open(pdfFileUrl, '_blank')
    }

    const downloadPdf = () => {
        const pdfFileName = `CVJorgelinaMariano${getLanguageSuffix()}.pdf`
        const link = document.createElement('a')
        link.href = i18n.language === 'en' ? PdfFileEn : PdfFileEs;
        link.download = pdfFileName;
        link.click();
    }

    const ref = useRef(null)
    const userView = useInView(ref, {
        once: true
    })

    return (
        <>
            <div id='aboutme' className='aboutme-container'>
                <div className='aboutme-text-container'>
                    <div className='aboutme-title'>
                        <h2 className='aboutme-text-h2'>{t('aboutme.title')}</h2>
                        <h3 className='aboutme-text-h3'>{t('aboutme.subtitle')}</h3>
                    </div>
                    <div className='aboutme-text'>
                        <h4 className='aboutme-text-h4'>{t('aboutme.paragraph')}</h4>
                        <h4 className='aboutme-text-h4'>{t('aboutme.paragraph2')}</h4>
                    </div>
                    <div className='aboutme-socialnetworks'>
                        <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank">
                            <motion.img
                                whileHover={{ scale: 1.3 }}
                                src={imgLinkedIn}
                                alt="Link to LinkedIn" /></a>
                        <a href="https://github.com/jormariano" target="_blank">
                            <motion.img
                                whileHover={{ scale: 1.3 }}
                                src={imgGitHub}
                                alt="Link to GitHub" /></a>
                    </div>
                    <div className='aboutme-buttons'>
                        <button className='aboutme-button' onClick={viewPdf}>{t('aboutme.viewPdf')}</button>
                        <button className='aboutme-button' onClick={downloadPdf}>{t('aboutme.downloadPdf')}</button>
                    </div>
                </div>
                <motion.img
                    ref={ref}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={userView ? { opacity: 1, scale: 1, transition: { duration: 1 } } : ""}
                    className='personal-photo' src={imgPhoto} alt='personal photo' />
            </div >
        </>
    )
}

export default AboutMe