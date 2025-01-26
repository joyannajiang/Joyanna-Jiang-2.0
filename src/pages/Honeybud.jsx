import React from 'react'
import Footer from '../sections/Footer/Footer';
import ProjectHero from '../sections/ProjectHero/ProjectHero';
import projectTitle from '../assets/HoneyBud/title.png';
import projectImage from '../assets/HoneyBud/HoneybudMockup.png';
import ProjectStepBlock from '../sections/ProjectStepBlock/ProjectStepBlock';
import ProjectSection from '../sections/ProjectSection/ProjectSection';
import prototypeImg from '../assets/HoneyBud/Prototype.png';
import designSystem from '../assets/Honeybud/HoneybudDesignSystem.png';
import highFidelity from '../assets/HoneyBud/HoneyBudHi-fis.png';

function Honeybud() {
  const ideationStage = [
    {
      type: 'text',
      text: "The first things that came into our minds when thinking about apps to improve financial literacy were informational apps surrounding taxes, stocks, general finance, budgeting, etc. Among those, we decided to target budgeting because as college students, we’ve had to experience our fair share of budgeting. However, we knew that budgeting apps are fairly common and wanted to create something more unique for the designathon and so when my partner Phoebe proposed wedding budgeting, I immediately jumped onto that idea."
    },
    {
      type: 'text', 
      text: <br></br>
    },    
    {
      type: 'text',
      text: 'User Painpoints'
    },
    {
      type: 'bulletPoints', 
      points: ['I don’t know what to set my budget at for the wedding and events', 'I have different priorities for which features are important to me', 'I want my partner to be involved in the planning process', 'I am not sure how to finance and split costs with my partner', 'It is difficult to manage and track receipts from multiple vendors', 'I don’t know how much I should be spending on each item'] 
    }
  ]
  const design = [
    {
      type: 'text',
      text: "Because I was working with a partner, we implemented a basic design system at the start in order to maintain a unity between our designs. We decided to use a sage green color because we wanted the app to be gender neutral but still sophisticated in color and since finances/money is often associated with the color green, we decided on a soft sage green."
    },
    {
      type: 'image',
      src: designSystem,
      alt: 'design system for honeybud'
    },
    {
      type: 'text', 
      text: <br></br>
    },    
    {
      type: 'text',
      text: 'High Fidelity Screens'
    },
    {
      type: 'image',
      src: highFidelity,
      alt: 'high fidelity screens for honeybud'
    }
  ]

  const prototype = [
    {
      type: 'text',
      text: "The last step to tie everything together was prototyping the screens. Through this, we were able to show how a user would onboard onto the app and demonstrate the questionaire process to help users determine their budget and financing plans."
    },
    {
      type: 'figma',
      src: "https://embed.figma.com/proto/do6A70gXGyRGcfjsD0dwZd/Avocademy-Designathon?page-id=0%3A1&node-id=91-1583&node-type=canvas&viewport=436%2C112%2C0.05&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=91%3A1583&show-proto-sidebar=1&embed-host=share"
    }
  ]

  const finalThoughts = [
    {
      type: 'text',
      text: "Designing a wedding budgeting app was a very interesting experience and taught me a lot about the difficulties and struggles that couples go through while planning for their big day. Our app covers the basics of the wedding planning process but for future improvments, it would be valuable to expand its functions into including information and tools to help couples pay back loans after the wedding has occured to lengthen the user journey with our app. To diverse even more, we could modify the app to not only target wedding planning but also to allow for financial planning of any sort of big one-time events. "
    },
    {
      type: 'text', 
      text: <br></br>
    },
    {
      type: 'text',
      text: "My partner and I ended up placing first out of 208 submissions and our final presentation can be seen at the link below!"
    },
    {
      type: 'text', 
      text: <br></br>
    },    
    {
      type: 'text',
      text: "Watch our full pitch here: https://www.youtube.com/watch?v=KpPEeElFNSE"
    },  
    {
      type: 'image',
      src: projectTitle,
      alt: 'honeybud project title'
    }
  ]

  return (
    <>
      <ProjectHero
        projectTitle={projectTitle} 
        oneLiner="Making wedding budgeting easy, accurate, and financially responsible for all couples"
        projectImage={projectImage}
        role="Product Designer"
        timeline="May 16-21 2022"
        tools="Figma"
        skills="UI/UX Design • Prototyping • Branding"
        team="Joyanna Jiang • Phoebe Um"
      />
      <ProjectStepBlock
        projectStage="Design Challenge"
        projectDescription="The FinTech Challenge
                              How might we explore how to improve financial literacy? "
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

export default Honeybud;
