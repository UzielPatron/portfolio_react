import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { skills, experience } from '../../constants';

import './Skills.scss';

const Skills = () => {
  
  
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list' >
          {
            skills.map( (skill, idx) => (
              <motion.div
                whileInView={{ opacity: [ 0, 1 ] }}
                transition={{ duration: .5 }}
                className='app__skills-item app__flex'
                key={ idx }
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                  <img src={ skill.icon } alt={ skill.name } />
                </div>
                <p className='p-text'>{ skill.name }</p>
              </motion.div>
            ) )
          }
        </motion.div>

        <motion.div
          className='app__skills-exp'
        >
          {
            experience.map( (exp, idx) => (
              <motion.div
                className='app__skills-exp-item'
                key={ idx }
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{ exp.year }</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  { 
                    exp.works.map( (work, idx) => (
                      <div key={idx}>
                        <motion.div
                          whileInView={{ opacity: [ 0, 1 ] }}
                          transition={{ duration: .5 }}
                          className='app__skills-exp-work'
                          data-tip
                          data-for={ work.name }
                          key={ idx }
                        >
                          <h4 className='bold-text'>{ work.name }</h4>
                          <p className='p-text'>{ work.company }</p>
                        </motion.div>
                        <ReactTooltip
                          id={ work.name }
                          effect='solid'
                          arrowColor='#fff'
                          className='skills-tooltip'
                        >
                          { work.desc }
                        </ReactTooltip>
                      </div>
                    ) )
                  }
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </>
  )
}


export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');