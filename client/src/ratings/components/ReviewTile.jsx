import React from "react";
import ReactDOM from "react-dom";

const ReviewTile = ({review}) => {

  return (
    <div>
      {/* {review.reviewer_name}
      {review.body} */}
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="w-16 h-16 mt-1">
      <img src={review.photos.length > 0 ? review.photos[0].url : 'https://hpr.com/wp-content/uploads/2021/08/LP_generic_beautifulstate.jpg'} alt="Review Photo" className="w-full h-full object-cover rounded-full" style={{maxWidth: '200px', maxHeight: '200px'}}></img>
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
        <p className="mt-4 text-sm text-gray-600">{review.body}</p>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{review.reviewer_name}</h3>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile