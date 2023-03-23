import React, {useState} from 'react'

const MoreReviews = ({maxReviews, setMaxReviews, reviews}) => {

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const clickHandler = () => {
    setMaxReviews(maxReviews + 2)
    buttonDisabler()
  }

  const buttonDisabler = () => {
    console.log(maxReviews >= reviews.length, maxReviews, reviews.length)
    maxReviews >= reviews.length - 1 ? setButtonDisabled(true) : setButtonDisabled(false);
  }

  return (
    <div>
    <button className="btn btn-active btn-secondary" onClick={clickHandler} disabled={buttonDisabled}>More Reviews</button>
    </div>
  )
}

export default MoreReviews