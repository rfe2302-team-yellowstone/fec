import React, { useState, useEffect, useRef } from 'react';
import debounce from '../../lib/debounce.js';

const QAndASearch = ({questions, setQuestions, allQuestions, tempQuestions, setTempQuestions}) => {
  const [query, setQuery] = useState('');

  const search = (searchTerm) => {
    if (searchTerm.trim().length <= 3 && allQuestions.length > 0) {
      console.log('current questions:', questions, 'original questions:', tempQuestions)
      setQuestions(allQuestions.slice(0, 2));
    } else {
      let searchResult = allQuestions.filter((question) => {
        return question.question_body.includes(searchTerm);
      })
    }
  }

  const debouncedSearch = useRef(debounce(search, 500)).current;

  const handleSearchChange = e => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    debouncedSearch(query);
  }, [query]);

  return (
    <form>
      <div className="form-control">
        <div className="input-group mt-2">
          <input type="text" placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' className="input input-bordered w-full" value={query} onChange={handleSearchChange}/>
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
    </form>
  )
}

export default QAndASearch;