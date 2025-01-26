import styles from './ProjectsStyles.module.css';
import cora from '../../assets/Cora/thumbnail.png';
import honeybud from '../../assets/Honeybud/thumbnail.png';
import pathway from '../../assets/Pathway/thumbnail.png';
import innod from '../../assets/Innod/thumbnail.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={cora} 
            link="/cora"
            h3="Cora"
            p="EQ Toy + App"  
        />
        <ProjectCard 
            src={honeybud} 
            link="/honeybud" 
            h3="Honeybud"
            p="Wedding Budgeter"  
        />
        <ProjectCard 
            src={pathway} 
            link="/pathway" 
            h3="Pathway"
            p="Walking App"  
        />
        <ProjectCard 
            src= {innod} 
            link="/innod" 
            h3= "InnoD @USC"
            p="Design Club"  
        />
      </div>
    </section>
  );
}

export default Projects;
