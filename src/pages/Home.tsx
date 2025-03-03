import React from 'react'
import T3WelcomeCanvas from '../components/T3WelcomeCanvas'
import ProjectsPreviewComp from '../components/ProjectsPreviewComp'
import ProjectsPage from './ProjectsPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Header/>
<T3WelcomeCanvas/>
<ProjectsPage/>
<Footer/>
    </div>
  )
}

export default Home