import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { work } from '../../constants';

import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
    
      if(item === 'All') {
        setFilterWork(work);
      } else {
        setFilterWork( work.filter( (work) => work.tags.includes(item)));
      }
    }, 500)
  };

  useEffect(() => {
    setFilterWork(work);
  }, [])

  return (
    <>
      <h2 className="head-text">
        My Creative
        <span> Portfolio </span>
        Section
      </h2>

      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map( (item, idx) => (
          <div
            key={ idx }
            onClick={ () => handleWorkFilter(item) }
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            { item }
          </div>
        )) }
      </div>

      <motion.div
        animate={ animateCard }
        transition={{ duration: .5, delayChildren: .5 }}
        className='app__work-portfolio'
      >
        { 
          filterWork.map( (work, idx) => (
            <div key={ idx } className='app__work-item app__flex'>
              <div className='app__work-img app__flex'>
                <img src={ work.imgUrl } alt={ work.name } />
                
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: .25, ease: 'easeInOut', staggerChildren: .5 }}
                  className='app__work-hover app__flex'
                >
                  <a
                    href={ work.projectLink }
                    target='_blank'
                    rel='noreferrer'  
                  >
                    <motion.div
                      whileHover={{ scale: [1, .9] }}
                      transition={{ duration: .25 }}
                      style={{ marginRight: '5px' }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a
                    href={ work.codeLink }
                    target='_blank'
                    rel='noreferrer'  
                  >
                    <motion.div
                      // whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, .9] }}
                      transition={{ duration: .25 }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>
                  { work.name }
                </h4>
                <p className='p-text' style={{ marginTop: 10 }}>{ work.description }</p>
              
                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{ work.tags[0] }</p>
                </div>

              </div>
            </div>
          ) )
        }
      </motion.div>

    </>
  )
}


export default AppWrap(Work, 'work');