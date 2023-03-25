import React, {useState} from "react";
import axios from "axios";

const ReviewTile = ({review}) => {

  const [helpfulCount, setHelpfulCount] = useState(review.helpfulness)
  const [showFullReview, setShowFullReview] = useState(false)

  const handleShowMore = () => {
    setShowFullReview(true)
  }

  const handleHelpfulClick = e => {
    axios.put(`http://localhost:3000/reviews/${review.review_id}/helpful`)
      .then(() => {
        setHelpfulCount(helpfulCount + 1);
      })
      .catch(err => {
        console.log('unable to mark Answer as helpful, error:', err);
      })
  }

  const handleReportClick = e => {
    axios.put(`http://localhost:3000/reviews/${review.review_id}/report`)
    .then(() => {
      console.log('Successfully reported review')
    })
      .catch(err => {
        console.log('unable to report answer, error:', err);
      })
  }


  return (
    <div className="mr-4">
      {/* {review.reviewer_name}
      {review.body} */}
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="relative">
          <div className="absolute top-0 right-10 flex items-center">
           {review.recommend ? (
              <svg xlmns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24"
               fill="currentColor">
               <path fillRule="nonzero" d="M6.707 14.707a1 1 0 0 1-1.414 0L2 10.414l1.414-1.414L6.707 12.586l8.293-8.293L18.586 5l-10 10z" />
               </svg>
            ) : null}
            <p className="text-xs text-gray-500 ml-1">{review.reviewer_name} {review.date.split('T')[0]}</p>
          </div>
        </div>
      <div className="flex flex-row space-x-4 w-16 h-16 mt-1">
      {review.photos.length === 0 ? (
        <img src= 'https://hpr.com/wp-content/uploads/2021/08/LP_generic_beautifulstate.jpg' alt="Review Photo" className="w-full h-full object-cover rounded-full" style={{maxWidth: '200px', maxHeight: '200px'}}></img>
      ) : (
        review.photos.map(photo => (
          <img
          key={photo.id}
          src={photo.url}
          className="w-full h-full object-cover rounded-full"
          style={{maxWidth:'200px', maxHeight:'200px'}}
          ></img>
        ))
      )}
      {/* <img src={review.photos.length > 0 ? review.photos[0].url : 'https://hpr.com/wp-content/uploads/2021/08/LP_generic_beautifulstate.jpg'} alt="Review Photo" className="w-full h-full object-cover rounded-full" style={{maxWidth: '200px', maxHeight: '200px'}}></img> */}
      </div>
      <div>
      <div className = "relative top-0 left-0 flex items-center w-4 h-4">
        <div className="flex flex-row space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
          key={i}
          // width="20"
          className={`w-4 h-4 fill-current ${
            i < review.rating ? "text-yellow-500" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          >
          <path d="M10 1L13.09 6.14L19 7.64L14.63 12.34L15.82 18L10 15.09L4.18 18L5.37 12.34L1 7.64L6.91 6.14L10 1z"/>
          </svg>
        ))}
        </div>
      </div>
      </div>
      <div>
        <span className="mt-1 text-gray-600 text-xs">{review.rating} out of 5 stars</span>
        <h3 className="mt-4 text-black-800">{review.summary}</h3>
        <p className="mt-4 mb-8 text-sm text-gray-600">
         {showFullReview ? review.body : review.body.substring(0, 250)}
         {review.body.length > 250 && !showFullReview && (
          <button className='btn btn-xs btn-ghost' onClick={handleShowMore}>
          Show More...
          </button>
         )}
        </p>
        <div className="relative mt-4" >
          <div className="mt-4 absolute bottom-0 left-5">
          <span>Helpful?</span>
          <button className='btn btn-xs btn-ghost' onClick={handleHelpfulClick}>Yes</button>{helpfulCount}
          <button className='btn btn-xs btn-ghost' onClick={handleReportClick}>Report</button>

          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default ReviewTile