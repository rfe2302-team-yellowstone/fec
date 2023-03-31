import React from 'react';
import {useState, useEffect, useRef } from 'react';
import axios from 'axios';
import QAndAHeader from './components/qa-header.jsx';
import QuestionsList from './components/questions-list.jsx';
import QAndAFooter from './components/qa-footer.jsx';
import SectionHeader from '../overview/components/header/SectionHeader.jsx';
import {useSelector, useDispatch } from 'react-redux';
import { trackClick } from '../features/click-tracker/clickTrackerSlice';
import { trackModule } from '../features/module-tracker/moduleTrackerSlice';
import PropTypes from 'prop-types';

export default function QAndA ({product, onMouseOver, headerHeight}) {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const clicks = useSelector(state => state.clickTracker)
  let module = useSelector(state => state.moduleTracker);
  const dispatch = useDispatch();
  const ModuleRef = useRef(module);
  ModuleRef.current = module;

  useEffect(() => {
    axios.get('/qa/questions', {
      params: {
        'product_id': product.id,
        'count': 1000
      }
    })
      .then(response => {
        // console.log('successfully retrieved questions from Atelier Questions API:', response.data.results)
        setQuestions(response.data.results.slice(0, 2));
        setAllQuestions(response.data.results);
      })
  }, [product]);

  return (
    <section className='flex flex-col items-center my-4' onMouseOver={onMouseOver}>
      <SectionHeader caption='' idName={'qa'} headerHeight={headerHeight} />
      <QAndAHeader questions={questions} setQuestions={setQuestions} allQuestions={allQuestions}/>
      <QuestionsList questions={questions} productName={product.name}/>
      <QAndAFooter productId={product.id} productName={product.name} allQuestions={allQuestions} setQuestions={setQuestions} questions={questions}/>
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={(e) => {
            dispatch(trackClick({
              elementClicked: e.target.outerHTML,
              timeOfClick: (new Date()).toString(),
              moduleClicked: "q&a"
            }))
          }
          }
        >
          Test Click
        </button>
        <span>Our Clicks: {JSON.stringify(clicks)}</span>
        <button onClick={e => dispatch(trackModule('qa'))}>CHange Module</button>
        <div>Current module: {module}</div>
      </div> */}
      {/* Uncomment the div above to see Redux in action for DOM element onClick metadata tracking! */}
    </section>
  )
}

QAndA.propTypes = {
  product: PropTypes.object.isRequired
}