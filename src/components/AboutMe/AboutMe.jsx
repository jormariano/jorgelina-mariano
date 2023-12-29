import './AboutMe.css'
import { useTranslation } from 'react-i18next'
import PdfFileEn from '../../../public/pdf/CVJorgelinaMariano_en.pdf'
import PdfFileEs from '../../../public/pdf/CVJorgelinaMariano_es.pdf'

const AboutMe = () => {

    const {t, i18n } = useTranslation(['global'])

    const imgFoto = './img/foto-personal.jpg'

    const getLanguageSuffix = () => {
        
        return i18n.language === 'en' ? '_en' : '_es';
    }

    const viewPdf = () => {
        const pdfFileName = `CVJorgelinaMariano${getLanguageSuffix()}.pdf`
        const pdfFileUrl = i18n.language === 'en' ? PdfFileEn : PdfFileEs;
       
        window.open(pdfFileUrl, '_blank')
    }

    const downloadPdf = () => {
        const pdfFileName = `CVJorgelinaMariano${getLanguageSuffix()}.pdf`
        const link = document.createElement('a')
        link.href = i18n.language === 'en' ? PdfFileEn : PdfFileEs;
        link.download = pdfFileName;
        link.click();
    }

    return (
        <>
            <div className='inicio-personal'>
                <div className='inicio-texto'>
                    <h2>{t('aboutme.title')}</h2>
                    <h2>{t('aboutme.subtitle')}</h2>
                    <h4>{t('aboutme.paragraph')}</h4>
                    <h4>{t('aboutme.paragraph2')}</h4>
                    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        <button onClick={viewPdf}>{t('aboutme.viewPdf')}</button>
                        <button onClick={downloadPdf}>{t('aboutme.downloadPdf')}</button>
                    </div>

                </div>
                <img className='foto-personal' src={imgFoto} alt='foto personal' />
            </div>
        </>
    )
}

export default AboutMe