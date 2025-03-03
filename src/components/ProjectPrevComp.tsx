import React from 'react'
import {ProjectData} from '../assets/data/ProjectData'
import { Link } from 'react-router-dom';
interface Props {
    projectData:ProjectData;
}
const ProjectPrevComp = ({projectData}:Props) => {
  return (
    <div>
        <>
        <img src={projectData.thumbNail}></img>
        <h1>{projectData.title}</h1>
        <p>{projectData.shortDescription}</p>
        <p>{projectData.projectType}</p>
        <Link to={`/projects/${projectData.id}`}>See more here</Link>
        
        
        </>
    </div>
  )
}

export default ProjectPrevComp