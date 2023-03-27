import React, {useState, useEffect} from "react";

const RatingBreakdown = ({reviews, setReviews, metaData}) => {

  const [metaDataRatings, setMetaDataRatings] = useState({})
  const [metaDataRecommended, setMetaDataRecommended] = useState({})
  const [rating, setRating] = useState(0);
  const [five, setFive] = useState(0);
  const [four, setFour] = useState(0);
  const [three, setThree] = useState(0);
  const [two, setTwo] = useState(0);
  const [one, setOne] = useState(0);
  const [recommended, setRecommended] = useState(0)

  const reviewCalculator = () => {
    let amtOfReviews = 0
    for (let key in metaDataRatings) {
      amtOfReviews += Number(metaDataRatings[key])
    }
    return amtOfReviews
  }

  let totalReviews = reviewCalculator()


  useEffect(() => {
    const ratingsStore = {}
    for (let key in metaData.ratings) {
      ratingsStore[key] = metaData.ratings[key]
    }
    setMetaDataRatings(ratingsStore)

    const recommendedStore = {}
    for (let key in metaData.recommended) {
      recommendedStore[key] = metaData.recommended[key]
    }
    setMetaDataRecommended(recommendedStore)
  }, [metaData])
  // const totalReviews = reviewCalculator()

  // useEffect(() => {
  //   // console.log(metaDataRatings)
  //   // console.log(reviewCalculator())
  //   // console.log(totalReviews)
  //   console.log(metaDataRatings[1])
  // }, [metaDataRatings])

  useEffect(() => {
    let fives = Number(metaDataRatings[5])
    let fours = Number(metaDataRatings[4])
    let threes = Number(metaDataRatings[3])
    let twos = Number(metaDataRatings[2])
    let ones = Number(metaDataRatings[1])
    let score = (fives * 5 + fours * 4 + threes * 3+ twos * 2 + ones) / (totalReviews)
    let recommending = metaDataRecommended[true]
    // for (let i = 0; i < totalReviews; i++) {
    //   score += reviews[i].rating
    //   if (reviews[i].rating === 5) {
    //     fives += 1
    //   } else if (reviews[i].rating === 4) {
    //    fours += 1
    //   } else if (reviews[i].rating === 3) {
    //     threes += 1
    //   } else if (reviews[i].rating === 2) {
    //     twos += 1
    //   } else if (reviews[i].rating === 1) {
    //     ones += 1
    //   }
    //   if (reviews[i].recommend === true) {
    //     recommending += 1
    //   }
    // }
    setRating(Math.round(score * 100)/100)
    setFive(fives)
    setFour(fours)
    setThree(threes)
    setTwo(twos)
    setOne(ones)
    setRecommended(recommending)
  }, [metaDataRatings])

  return (
    <div>
      <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <div className="p-6"></div>
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-bold text-slate-700">Ratings & Reviews</h4>
          <span className="flex items-center gap-4 text-sm rounded text-slate-500">
            <span
            className="flex gap-1 text-amber-400"

            role="img"
            aria-label="Rating: 4 out of 5 stars"
            >
              <span aria-hidden="true"   className={`w-6 h-6 ${rating > .5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"  className={`w-6 h-6 ${rating > 1.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"   className={`w-6 h-6 ${rating > 2.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
              <span aria-hidden="true"   className={`w-6 h-6 ${rating > 3.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"   className={`w-6 h-6 ${rating > 4.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            </span>
            <span>{rating} out of 5</span>
          </span>
          <span className="text-xs leading-6 text-slate 400">
          based on {totalReviews} user ratings
           </span>
           <span className="text-xs leading-6 text-slate 400">
           {Math.round(recommended/totalReviews * 100)}% of reviews recommend this product
           </span>
           <span className="flex flex-col w-full gap-4 pt-6">
           <span className="flex items-center w-full gap-2">
           <a href="#" onClick={() => setReviews(reviews.filter((review) => review.rating === 5))} className="inline" style={{whitespace: 'nowrap'}}>
            <label
            id="p03e-label"
            htmlFor="p03e"
            className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500 inline-block"
            style={{whitespace: 'nowrap'}}
            >
            <span style={{display: 'inline-block'}}>
              5 star
              </span>
            </label>
            </a>
            <progress
            aria-labelledby="p03e-label"
            id="p03e"
            max="100"
            value={five/totalReviews * 100}
            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
            75%
            </progress>
            <span className="text-xs font-bold w-9 text-slate-700">{five}</span>
           </span>
           <span className="flex items-center w-full gap-2">
            <label
            id="p03e-label"
            htmlFor="p03e"
            className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
            >
              4 star
            </label>
            <progress
            aria-labelledby="p03e-label"
            id="p03e"
            max="100"
            value={four/totalReviews * 100}
            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
            </progress>
            <span className="text-xs font-bold w-9 text-slate-700">{four}</span>
           </span>
           <span className="flex items-center w-full gap-2">
            <label
            id="p03e-label"
            htmlFor="p03e"
            className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
            >
              3 star
            </label>
            <progress
            aria-labelledby="p03e-label"
            id="p03e"
            max="100"
            value={three/totalReviews * 100}
            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
            </progress>
            <span className="text-xs font-bold w-9 text-slate-700">{three}</span>
           </span>
           <span className="flex items-center w-full gap-2">
            <label
            id="p03e-label"
            htmlFor="p03e"
            className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
            >
              2 star
            </label>
            <progress
            aria-labelledby="p03e-label"
            id="p03e"
            max="100"
            value={two/totalReviews * 100}
            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
            </progress>
            <span className="text-xs font-bold w-9 text-slate-700">{two}</span>
           </span>
           <span className="flex items-center w-full gap-2">
            <label
            id="p03e-label"
            htmlFor="p03e"
            className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
            >
              1 star
            </label>
            <progress
            aria-labelledby="p03e-label"
            id="p03e"
            max="100"
            value={one/totalReviews * 100}
            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
            </progress>
            <span className="text-xs font-bold w-9 text-slate-700">{one}</span>
           </span>
           </span>
        </div>
      </div>
    </div>
  )
}

export default RatingBreakdown