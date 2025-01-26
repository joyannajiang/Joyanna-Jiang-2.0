import React from 'react'

function ProjectHeroCard(projectTitle, oneLiner, projectImage, projectDescription ) {
  return (
    <>
      <div className="projectHeroLeft">
        <img classname="projectTitle" src={projectTitle} />
        <p>{oneLiner}</p>
      </div>
      <div className="projectHeroRight">
        <img classname="projectImage" src={projectImage} />
      </div>
      <p>{projectDescription}</p>
      <span>
        <li>Role</li>
        <li>Timeline</li>
        <li>Tools</li>
        <li>Skills</li>
        <li>Team</li>
      </span>
    </>
  );
}

export default ProjectHeroCard;
