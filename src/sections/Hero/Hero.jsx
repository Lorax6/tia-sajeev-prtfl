import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg'
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf'
function Hero() {
  return (
    <section id='hero' className={styles.container}>
       <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Tia Sajeev"
            />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Color mdoe icon"/>
       </div>
       <div className={styles.info}>
        <h1>Tia Sajeev</h1>
        <h2>Aspiring Frontend Developer and UI/UX designer</h2>
        <span>
            <a href="https://github.com/Lorax6" target='blank'>
            <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/tiasajeev/" target='blank'>
            <img src={linkedinIcon} alt="" /></a>
        </span>
        <p>With a passion for developing modern React web apps for 
            commerical businesses
        </p>
        <a href={CV} download>
            <button className="hover" >
                Resume
            </button>
        </a>
       </div>
    </section>
  )
}

export default Hero
