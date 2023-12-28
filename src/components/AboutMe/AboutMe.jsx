import './AboutMe.css'

const AboutMe = () => {

    const imgFoto = './img/foto-personal.jpg'

    return (
        <>
            <div className='inicio-personal'>
                <div className='inicio-texto'>
                    <h2>¡WELCOME! I'm Jorgelina</h2>
                    <h2>and it's a pleasure to meet you.</h2>
                    <h4>Como apasionada Desarrolladora Frontend me dedico a crear experiencias web atractivas y funcionales.</h4>
                    <h4>Mi compromiso me motiva a optimizar y realizar tareas de manera eficiente. Estoy en constante aprendizaje tanto en cursos como de manera autodidacta, realizando nuevos desafíos tecnológicos.</h4>
                    <div className='inicio-info'>
                        <div className='inicio-cv'>
                            <h3>VISUALIZAR CV</h3>
                            <h3>DESCARGAR CV</h3>
                        </div>
                        <div className='inicio-link'>
                            <h3>LINK DE LINKEDIN</h3>
                            <h3>LINK DE GITHUB</h3>
                        </div>
                    </div>
                </div>
                <img className='foto-personal' src={imgFoto} alt='foto personal' />
            </div>
        </>
    )
}

export default AboutMe