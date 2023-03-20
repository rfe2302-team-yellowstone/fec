import React from 'react';
import QAndASearch from './qa-search.jsx';

const QAndAHeader = () => {

  return (
    <header className='my-2 w-[60rem]'>
      <h4>QUESTIONS & ANSWERS</h4>
      <QAndASearch />
    </header>
  )
}

export default QAndAHeader;