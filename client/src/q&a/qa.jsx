import React from 'react';
import QAndAHeader from './components/qa-header.jsx';

const QAndA = () => {

  return (
    <section className='flex flex-col items-center'>
      <QAndAHeader />
      <div>QA List</div>
      <div>Buttons Footer</div>
    </section>
  )
}

export default QAndA;