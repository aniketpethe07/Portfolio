import React from 'react';
import styles from './HeaderStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="header" className={styles.navbar}>
      <ul className={styles.navList}>
        <div className={styles.navLinks}>
          <li><h2><a href="#projects">Projects</a></h2></li>
          <li><h2><a href="#skills">Skills</a></h2></li>
          <li><h2><a href="#education">Education</a></h2></li>
          <li><h2><a href="#contact">Contact</a></h2></li>
        </div>
        <div className={styles.socialLinks}>

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
            <img
              className={styles.colorMode}
              src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
            />
          </span>
        </div>
      </ul>
    </section>
  );
}

export default Header;
