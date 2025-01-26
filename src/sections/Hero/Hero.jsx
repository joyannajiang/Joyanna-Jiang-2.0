import styles from './HeroStyles.module.css';
import heroImg from '../../assets/aboutme.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/JoyannaJiangResume.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const emailIcon = theme === 'light' ? emailLight : emailDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile picutre of Joyanna Jiang" 
                />
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt="Color mode icon" 
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Joyanna <br/> Jiang
                </h1>
                <h2>
                    Product Manager
                </h2>
                <span>
                    <a href="mailto:joyannajiang@gmail.com" target="_blank">
                        <img src={emailIcon} alt="Email icon"/>
                    </a>
                    <a href="https://github.com/joyannajiang" target="_blank">
                        <img src={githubIcon} alt="Github icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/joyannajiang/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon"/>
                    </a>
                </span>
                <p className={styles.description}>
                    I like to dabble. PM is my current job title but I'm also a 
                    frontend developer, an occasional designer, and an adventurous traveler.
                </p>
                <a href={resume}  download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
