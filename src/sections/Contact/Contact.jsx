import styles from './ContactStyles.module.css';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Contact() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact Me</h1>
      <p>
        I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help you with Web Development.
      </p>
      <span>
        <a href="https://twitter.com/AniketPethe1" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/aniketpethe07" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/aniket-pethe/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </a>
      </span>
    </section>
  );
}

export default Contact;
