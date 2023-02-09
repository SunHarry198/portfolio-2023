import React, { useEffect, useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import './assets/styles/global.scss'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function App() {
  const [activeElement, setActiveElement] = useState('header')
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.5 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const { ref: skillRef, inView: skillInView } = useInView({ threshold: 0.5 })
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5
  })
  const { ref: projectsRef, inView: projectsInView } = useInView()
  const { ref: contactRef, inView: contactInView } = useInView()

  useEffect(() => {
    if (headerInView) {
      setActiveElement('header')
    }
    if (aboutInView) {
      setActiveElement('about')
    }
    if (skillInView) {
      setActiveElement('skill')
    }
    if (experienceInView) {
      setActiveElement('experience')
    }
    if (projectsInView) {
      setActiveElement('projects')
    }
    if (contactInView) {
      setActiveElement('contact')
    }
  }, [
    aboutInView,
    contactInView,
    experienceInView,
    headerInView,
    projectsInView,
    skillInView
  ])
  return (
    <motion.div className='App'>
      <DefaultLayout aciveNavbar={activeElement}>
        <div
          ref={headerRef}
          id='header'
          style={{ width: '100vw', height: '120vh', background: 'green' }}
        >
          Header
        </div>
        <div
          ref={aboutRef}
          id='about'
          style={{ width: '100vw', height: '100vh', background: 'yellow' }}
        >
          About
        </div>
        <div
          ref={skillRef}
          id='skill'
          style={{ width: '100vw', height: '100vh', background: 'red' }}
        >
          Skill
        </div>
        <div
          ref={experienceRef}
          id='experience'
          style={{ width: '100vw', height: '100vh', background: 'blue' }}
        >
          Experience
        </div>
        <div
          ref={projectsRef}
          id='projects'
          style={{ width: '100vw', height: '100vh', background: 'white' }}
        >
          Projects
        </div>
        <div
          ref={contactRef}
          id='contact'
          style={{ width: '100vw', height: '100vh', background: 'violet' }}
        >
          Contact
        </div>
      </DefaultLayout>
    </motion.div>
  )
}

export default App
