import React from 'react';
import styles from './ProjectStepBlockStyles.module.css';

function ProjectStepBlock({projectStage, projectDescription}) {
  return (
    <section className={styles.container}>   
        <h2>{projectStage}</h2> 
        <p>{projectDescription}</p>  
    </section>
  );
}

export default ProjectStepBlock;
