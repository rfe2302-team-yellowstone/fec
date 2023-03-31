import React, {useState, useEffect} from "react";

const Sort = ({reviews, setReviews, order, setOrder}) => {

  const [menu, setMenu] = useState(false)
  const [sortBy, setSortBy] = useState('Relevance')

  const clickHandler = (e) => {
    e.preventDefault()
    setMenu(!menu)
  }

  const handleSortByRecent = (e) => {
    e.preventDefault()
    setMenu(!menu)
    setSortBy('Recent')
    const orderedReviews = reviews.slice().sort((a, b) => new Date(b.date) - new Date (a.date))
    setOrder(orderedReviews)
  }

  const handleSortByHelpful = (e) => {
    e.preventDefault()
    setMenu(!menu)
    setSortBy('Helpful')
    const orderedReviews = reviews.slice().sort((a, b) => b.helpfulness - a.helpfulness)
    console.log(orderedReviews, '------HELPFULNESS------')
    setOrder(orderedReviews)
  }

  const relevanceSorter = () => {
    const weightFactor = 10
    const orderedReviews = reviews.sort((a, b) => {
      const aDays = Math.floor((new Date() - new Date(a.date)) / (1000 * 60 * 60 * 24))
      const bDays = Math.floor((new Date() - new Date(a.date)) / (1000 * 60 * 60 * 24))
      const aScore = a.helpfulness * weightFactor - aDays // .5 is the weight factor - otherwise helpfulness will be overemphasized
      const bScore = b.helpfulness * weightFactor - bDays
      console.log(a.reviewer_name, aScore, b.reviewer_name, bScore)
      return aScore - bScore;
    })

    setOrder(orderedReviews.reverse())
  }

  const handleSortByRelevance = (e) => {
    e.preventDefault()
    setMenu(!menu)
    setSortBy('Relevance')
    relevanceSorter()
  }

  useEffect(() => {
    relevanceSorter()
  }, [])

  const defaultPreventer = (e) => {
    e.preventDefault()
  }

  return (
    <div className="relative inline-flex border rounded-md z-50">
      <a
      href="#"
      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      onClick={defaultPreventer}
      >
      {sortBy}
      </a>
      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
          onClick={clickHandler}
          >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
          ></path>
          </svg>
        </button>

{ menu ? (
        <div className="absolute w-56 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
          <div className="p-2 right-10">
            <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            onClick={handleSortByRelevance}
            >
              Relevance
            </a>
            <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            onClick={handleSortByHelpful}
            >
              Helpful
            </a>
            <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            onClick={handleSortByRecent}
            >
              Recent
            </a>
          </div>
        </div>
) : (null)}
      </div>
    </div>

  )
}

export default Sort