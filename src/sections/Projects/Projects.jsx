import styles from './ProjectsStyles.module.css';
import crypto from '../../assets/crypto.png'; 
import book from '../../assets/book.png'; 
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={crypto}
          // link="https://github.com/aniketpethe07/Crypto-Market"
          h3="Crypto-Market"
          p="Paper Trading App"
        />
        <ProjectCard
          src={book}
          // link="https://github.com/aniketpethe07/Book-Store"
          h3="Book-Store"
          p="Hamburger Restaurant"
          />
        <ProjectCard
          src={crypto}
          // link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Tomato"
          p="Food Delivery Website"
          />
        {/* <ProjectCard
          src={crypto}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
