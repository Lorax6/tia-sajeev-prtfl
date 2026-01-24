import React from 'react';
import styles from './ProjectsStyles.module.css';
import langaraWebsite from '../../assets/langara-website.png';
import ventureOS from '../../assets/ventureOS.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={langaraWebsite} width={300} height={200}
            link={"https://www.lsmcc.ca/" }
            title={"Langara Consulting Club Website"}/>
        <ProjectCard 
            src={ventureOS} width={370} height={200}
            link={"https://www.figma.com/make/9VAYx03Tx8X5AIa3ajdTGa/VentureOS?fullscreen=1&t=Wj7i0vM1pGKIbF5Y-1" }
            title={"VentureOS"}
            p="Revamping Overdrive"
        />
       
        </div>
    </section>
  )
}

export default Projects
