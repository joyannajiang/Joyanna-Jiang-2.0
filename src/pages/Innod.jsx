import React from 'react'
import Footer from '../sections/Footer/Footer';
import ProjectHero from '../sections/ProjectHero/ProjectHero';
import projectTitle from '../assets/Innod/title.png';
import projectImage from '../assets/Innod/titlepicture.png';
import ProjectStepBlock from '../sections/ProjectStepBlock/ProjectStepBlock';
import ProjectSection from '../sections/ProjectSection/ProjectSection';
import smileyFaces from '../assets/Innod/smileyfaces.png';
import buttons from '../assets/Innod/buttons.png';
import designSystem from '../assets/Innod/designsystem.png';
import graphics from '../assets/Innod/graphics.png';
import stats from '../assets/Innod/stats.png';

function Innod() {
  const settingTheTheme = [
    {
      type: 'text', 
      text: 'Each semester’s theme is based on a color going down the rainbow and this semester landed on yellow, specifically #FFF000. Wanting to produce something fresh and lively since it was spring, the first thing that came into many of our minds were smiley faces.  I drew inspiration from my team’s initial designs to help create variations of a smiley face character that would later be used as sort of a mascot for our semester.'
    },
    {
      type: 'image',
      src: smileyFaces,
      alt: 'smiley faces design'
    },
    {
      type: 'text', 
      text: 'In addition, we had decided to go for a look that was less strict and neat and more sketchy and playful. This included having simple lines and shading that offset the outline so with this in mind, I created a few stickers and also the semester logo.'
    },
    {
      type: 'image',
      src: buttons,
      alt: 'design system buttons and logo'
    }
  ];
  const finalDesignSystem = [
    {
      type: 'image',
      src: designSystem,
      alt: 'design system'
    },
    {
      type: 'image',
      src: graphics,
      alt: 'recruitment graphics'
    }
  ];
  const thingsILearned = [
    {
      type: 'text', 
      text: 'The recruitment process has a fairly tight timeline because we had to have the theme and graphics ready before the actual club semester really began. Through this, I learned to work in a time crunch, churning out any ideas that came to mind before revising picking the final choices. I was able to draw inspiration from my teammates, building off of their initial ideas while adding my own concepts to create cohesive and collaborative designs.  In addition to that, I found peer critiques to be extremely effective and learned to efficiently build on constructive criticism.'
    }
  ];
  const funStats = [
    {
      type: 'text', 
      text: 'The marketing team as a whole worked on a lot more projects through the semester in addition to the recruitment theme. I helped create social media posts and assests for the clubs fundraisers and also CreateSC, a designation that is held annually by Innovative Design @ USC (I also participated in CreateSC this year and you can see my work in the Pathway project). On our club instagram from Jan 20th - April 19th...'
    },
    {
      type: 'image',
      src: stats,
      alt: 'club instagram statistics'
    }
  ]

  return (
    <>
      <ProjectHero 
        projectTitle={projectTitle} 
        oneLiner="USC’s premiere creative agency of designers, photographers, and web developers."
        projectImage={projectImage}
        projectDescription="Innovative Design at USC is a student-run creative agency club. 
        It is a team of designers, photographers, and web developers all working together 
        to support other student organizations and professional clients in their projects. 
        For the Spring semester of 2022, I was part of the marketing team, responsible for 
        the new theme and graphics of recruitment and many other projects/events held throughout 
        the semester. I worked alongside six other talented designers in creating Innod’s branding 
        for the spring semester."
        role="Marketing Team Member"
        timeline="Jan-May 2022"
        tools="Figma"
        skills="Graphic Design • Branding"
        team="Marketing Team"
      />
      <ProjectStepBlock 
        projectStage="Spring 2022 Semester Recruitment Timeline"
      />
      <ProjectSection 
        title="Setting the Theme"
        content={settingTheTheme}
      />
      <ProjectSection 
        title="Final Design System"
        content={finalDesignSystem}
      />  
      <ProjectSection 
        title="Things I Learned"
        content={thingsILearned}
      />    
      <ProjectSection 
        title="Fun Stats"
        content={funStats}
      />
      <Footer/>                
    </>
  );
}

export default Innod;
