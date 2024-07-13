import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile_picture.png';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Aniket Pethe"
        />
      </div>
      <div className={styles.info}>
        <h2 style={{textTransform: 'none'}}>
          Hello!
          <br />
          Aniket Pethe
        </h2>
        <p className={styles.description}>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
