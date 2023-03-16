import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QAndAHeader from './components/qa-header.jsx';
import QuestionsList from './components/questions-list.jsx';
import QAndAFooter from './components/qa-footer.jsx';

const QAndA = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=37311', {
      headers: {
        'Authorization': ''
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