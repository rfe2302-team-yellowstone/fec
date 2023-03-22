import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QAndAHeader from './components/qa-header.jsx';
import QuestionsList from './components/questions-list.jsx';
import QAndAFooter from './components/qa-footer.jsx';
import {useSelector, useDispatch } from 'react-redux';
import { trackClick } from '../features/click-tracker/clickTrackerSlice';
import PropTypes from 'prop-types';

export default function QAndA ({product}) {
  const [questions, setQuestions] = useState([]);
  const clicks = useSelector(state => state.clickTracker)
  const dispatch = useDispatch();
  // console.log('initial product:', product);

  useEffect(() => {
    axios.get('http://localhost:3000/qa/questions', {
      params: {
        'product_id': product.id,
        'count': 4
      }
    })
      .then(response => {
        // console.log('successfully retrieved questions from Atelier Questions API:', response.data.results)
        setQuestions(response.data.results)
      })
  }, []);

  return (
    <section className='flex flex-col items-center my-4'>
      <QAndAHeader />
      <QuestionsList questions={questions}/>
      <QAndAFooter />
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
        <span>{JSON.stringify(clicks)}</span>
      </div> */}
      {/* Uncomment the div above to see Redux in action for DOM element onClick metadata tracking! */}
    </section>
  )
}

QAndA.propTypes = {
  product: PropTypes.object.isRequired
}