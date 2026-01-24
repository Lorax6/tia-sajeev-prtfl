import React from 'react'
import langaraWebsite from '../assets/langara-website.png';
function ProjectCard({src,width, height,link, title,p}) {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={src} width={width} height={height} alt={`${title} logo`} />
        <h3>{title}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCard
