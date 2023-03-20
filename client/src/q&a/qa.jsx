import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QAndAHeader from './components/qa-header.jsx';
import QuestionsList from './components/questions-list.jsx';
import QAndAFooter from './components/qa-footer.jsx';

const QAndA = ({product}) => {
  const [questions, setQuestions] = useState([]);
  // console.log('initial product:', product);

  useEffect(() => {
    axios.get('http://localhost:3000/qa/questions', {
      params: {
        'product_id': product.id,
        'count': 4
      }
    })
      .then(response => {
        console.log('successfully retrieved questions from Atelier Questions API:', response.data.results)
        setQuestions(response.data.results)
      })
  }, []);

  return (
    <section className='flex flex-col items-center my-4'>
      <QAndAHeader />
      <QuestionsList questions={questions}/>
      <QAndAFooter />
    </section>
  )
}

export default QAndA;