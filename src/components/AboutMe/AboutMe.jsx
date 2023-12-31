import './AboutMe.css'
import { useTranslation } from 'react-i18next'
import PdfFileEn from '../../pdf/CVJorgelinaMariano_es.pdf'
import PdfFileEs from '../../pdf/CVJorgelinaMariano_en.pdf'

const AboutMe = () => {

    const { t, i18n } = useTranslation(['global'])

    const imgPhoto = './img/personal-photo1.png'

    const getLanguageSuffix = () => {

        return i18n.language === 'en' ? '_en' : '_es';
    }

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

    return (
        <>
            <div className='aboutme-container'>
                <div className='aboutme-text-container'>
                    <div className='aboutme-title'>
                        <h2 className='aboutme-text-h2'>{t('aboutme.title')}</h2>
                        <h3 className='aboutme-text-h3'>{t('aboutme.subtitle')}</h3>
                    </div>
                    <div className='aboutme-text'>
                        <h4 className='aboutme-text-h4'>{t('aboutme.paragraph')}</h4>
                        <h4 className='aboutme-text-h4'>{t('aboutme.paragraph2')}</h4>
                        <h4 className='aboutme-text-h4'>{t('aboutme.paragraph3')}</h4>
                    </div>
                    <div className='aboutme-buttons'>
                        <button className='aboutme-button' onClick={viewPdf}>{t('aboutme.viewPdf')}</button>
                        <button className='aboutme-button' onClick={downloadPdf}>{t('aboutme.downloadPdf')}</button>
                    </div>
                </div>
                <img className='personal-photo' src={imgPhoto} alt='personal photo' />
            </div >
        </>
    )
}

export default AboutMe