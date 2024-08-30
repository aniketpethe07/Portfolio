import styles from './EducationStyles.module.css';
import EducationCard from '../../common/EducationCard';
import pccoe from '../../assets/PCCOE-Logo-24.png'; 
import mgm from '../../assets/Mgm-u-logo.png'; 


function Education() {
  return (
    <>
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.educationContainer}>
        <EducationCard
          src={pccoe}
          h3="Pimpri Chinchwad College of Engineering"
          h6="Master of Computer Applications"
          p="2023-Pursuing"
          />
        <EducationCard
          src={mgm}
          h3="MGM's Dr. G. Y. Patrikar College of CS & IT"
          h6="Bachelor of Computer Applications"
          p="2019-2022"
          />
      </div>
    </section>
    </>
  );
}

export default Education;
