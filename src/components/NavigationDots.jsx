import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'sobre mi', 'trabajos', 'skills', 'contacto'].map( (item, idx) => (
          <a
          key={ item + idx }
          href={`#${item}`}
          className='app__navigation-dot'
          style={ active === item ? { backgroundColor: '#313BAC' } : {} }
          />
        ) )}
    </div>
  )
}

export default NavigationDots;