import React from 'react';
import Footer from '../sections/Footer/Footer';
import ProjectHero from '../sections/ProjectHero/ProjectHero';
import ProjectStepBlock from '../sections/ProjectStepBlock/ProjectStepBlock';
import ProjectSection from '../sections/ProjectSection/ProjectSection';
import projectTitle from '../assets/Pathway/title-small.png';
import projectImage from '../assets/Pathway/mockup.png';
import userFlow from '../assets/Pathway/userflow.png';
import designSystem from '../assets/Pathway/designsystem.png';
import highFidelity from '../assets/Pathway/hifis.png';
import projectTitleLarge from '../assets/Pathway/title.png'

function Pathway() {
  const ideationStage = [
    {
      type: 'text',
      text: "Wellness in design is a very broad term and could mean creating an app that centered around user wellness or could be any type of app that incorporated tools for wellness such as time limits, brightness levels, etc so we decided to blend those two directions together into an app that incorporates user wellness in addition to containing elements within the app that increased user accesiblity. "
    },   
    {
      type: 'text',
      text: "User Wellness Aspect"
    },
    {
      type: 'bulletPoints', 
      points: ['Walking is proven to help people live healthier lives including both physical and mental wellbeing'] 
    },
    {
      type: 'text',
      text: "User Accessibility Features"
    },
    {
      type: 'bulletPoints', 
      points: ['Dark Mode', 'Color Suitable for the colorblind', 'Language settings', 'Imperial and metric system'] 
    },
    {
      type: 'text',
      text: "User Flow"
    },
    {
      type: 'image',
      src: userFlow,
      alt: 'user flow of app'
    }
  ]

  const design = [
    {
      type: 'text',
      text: "Because I was working with two other teammates, we implemented a basic design system at the start in order to maintain a unity between our designs."
    },
    {
      type: 'image',
      src: designSystem,
      alt: 'design system of app'
    },
    {
      type: 'text',
      text: "High Fidelity Screens"
    },
    {
      type: 'image',
      src: highFidelity,
      alt: 'high fidelity screens of app'
    }
  ]

  const prototype = [
    {
      type: 'text',
      text: "The final step was to prototyping to create seamless transitions between the different screens. Because I was still fairly new to prototyping on Figma, the entire process was quite time intensive. However, I was able to progress and learn tips and tricks along the way that will benefit me in future prototyping endeavors."
    },
    {
      type: 'figma',
      src: "https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGP5D9OaUn0hnMcAq0aHMLf%2FCreateSC%3Fpage-id%3D6%253A4355%26node-id%3D6%253A4363%26viewport%3D377%252C606%252C0.09%26scaling%3Dscale-down%26starting-point-node-id%3D52%253A4049",
    },
  ]

  const finalThoughts = [
    {
      type: 'text',
      text: "This was my first 24-hour designathon and I had a lot of fun working on it. I was able to gain experience working with a team of other designers and learned how to effectively coordinate and create uniform designs through a well implemented design system."
    },
    {
      type: 'image',
      src: projectTitleLarge,
      alt: 'title of app'
    }
  ]

  return (
    <>
      <ProjectHero 
        projectTitle={projectTitle} 
        oneLiner="A mobile application that makes people’s daily walks fun"
        projectImage={projectImage}
        role="Product Designer"
        timeline="Feb 16-17 2022"
        tools="Figma"
        skills="Product Design • Prototyping • Branding"
        team="Joyanna Jiang • Lesley Moon • Allison Nakajima"
      />
      <ProjectStepBlock
        projectStage="Design Challenge"
        projectDescription="Design a mobile app that promotos and reflects the principles of wellness in design"
      />
      <ProjectSection 
        title="Ideation Stage"
        content={ideationStage}
      />
      <ProjectSection 
        title="Design"
        content={design}
      />
      <ProjectSection 
        title="Prototype"
        content={prototype}
      />
      <ProjectSection 
        title="Final Thoughts"
        content={finalThoughts}
      />
      <Footer/>
    </>
  );
}

export default Pathway;
