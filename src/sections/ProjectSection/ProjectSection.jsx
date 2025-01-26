import styles from './ProjectSectionStyles.module.css';

const ProjectSection = ({title, content}) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {content.map((item, index) => {
        switch (item.type) {
            case 'text':
                return <p key={index} className={styles.text}>{item.text}</p>;
            case 'bulletPoints':
                return (
                    <ul key={index}>
                        {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>               
                );
            case 'image':
                return <img key={index} src={item.src} alt={item.alt} />

            case 'figma':
                return (
                    <div key={index} className={styles.figma}>
                        <iframe
                            title="Figma Embed"
                            width= "100%"
                            height="400"
                            src={item.src}
                            allowFullScreen
                        ></iframe>
                    </div>
                    );
            default: 
                return null;
        }
       })}
    </section>
  );
}

export default ProjectSection;
