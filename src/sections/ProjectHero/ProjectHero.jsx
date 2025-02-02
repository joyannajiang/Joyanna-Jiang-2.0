import React from 'react';
import styles from './ProjectHeroStyles.module.css';

function ProjectHero({projectTitle, oneLiner, projectImage, projectDescription, role, timeline, tools, skills, team}) {
  return (
    <section className={styles.container}>
      <a href="/Joyanna-Jiang-2.0/">
        Back
      </a>
        <div className={styles.projectHeroTop}>
            <div className={styles.projectHeroLeft}>
                <img className={styles.projectTitle} src={projectTitle} />
                <p>{oneLiner}</p>
            </div>
            <img className={styles.projectImage} src={projectImage} />
        </div>
      <p>{projectDescription}</p>
      <span>
        <p><strong>Role</strong> <br/> {role} </p>
        <p><strong>Timeline</strong> <br/> {timeline} </p>
        <p><strong>Tools </strong> <br/> {tools} </p>
        <p><strong>Skills</strong> <br/> {skills} </p>
        <p><strong>Team</strong> <br/> {team} </p>
      </span>
    </section>
  );
}

export default ProjectHero;