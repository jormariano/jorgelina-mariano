import './AboutMe.css'
import PdfFile from './CVJorgelinaMariano.pdf';

const AboutMe = () => {

    const imgFoto = './img/foto-personal.jpg'

    const viewPdf = () => {
        window.open(PdfFile, '_blank')
    }

    const downloadPdf = () => {
        const link = document.createElement('a')
        link.href = PdfFile;
        link.download = 'CVJorgelinaMariano.pdf';
        link.click();
    }

    return (
        <>
            <div className='inicio-personal'>
                <div className='inicio-texto'>
                    <h2>¡WELCOME! I'm Jorgelina</h2>
                    <h2>and it's a pleasure to meet you.</h2>
                    <h4>Como apasionada Desarrolladora Frontend me dedico a crear experiencias web atractivas y funcionales.</h4>
                    <h4>Mi compromiso me motiva a optimizar y realizar tareas de manera eficiente. Estoy en constante aprendizaje tanto en cursos como de manera autodidacta, realizando nuevos desafíos tecnológicos.</h4>
                    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        <button onClick={viewPdf}>Visualizar PDF</button>
                        <button onClick={downloadPdf}>Descargar PDF</button>
                    </div>

                </div>
                <img className='foto-personal' src={imgFoto} alt='foto personal' />
            </div>
        </>
    )
}

export default AboutMe