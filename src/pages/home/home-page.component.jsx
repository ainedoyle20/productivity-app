import React from 'react';

import './home-page.styles.css';

const HomePage = () => {
  return(
    <div className='home-page'>
      <div className='todo-list'>
        <input 
          type='text'
          placeholder='enter todo items here'
        />
      </div>
    </div>
  );
};

export default HomePage;