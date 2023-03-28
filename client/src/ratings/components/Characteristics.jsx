// import React, {useState, useEffect} from "react";
// import Characteristics from './Characteristics.jsx'
// import classnames from 'classnames'

// const ProductBreakdown = ({reviews, metaData}) => {

//   const [hoveredScore, setHoveredScore] = useState(null)

//   const metaDataSorter = () => {
//     for (let key in metaData.characteristics)
//     characteristics[key] = metaData.characteristics[key].value
//   }

//   const characteristics = metaDataSorter()

//   const metaDataSorter = () => {
//     for (let key in metaData.characteristics) {
//     characteristics[key] = metaData.characteristics[key].value
//     console.log(characteristics)
//     }
//   }

//   const getArrowPosition = (score) => {
//     const scoreValues = Object.keys(score).map(Number)
//     const position = score/5 * 100
//     return `${position}%`
//   }

//   const getProductBreakdownBar = (title, info) => {
//     let firstChar, secondChar, thirdChar;
//     if (title === 'Size') {
//       firstChar = 'A size too small'
//       secondChar = 'Perfect'
//       thirdChar = 'A size too wide'
//     } else if (title === 'Width') {
//       firstChar = 'Too narrow'
//       secondChar = 'Perfect'
//       thirdChar = 'Too wide'
//     } else if (title === 'Comfort') {
//       firstChar = 'Uncomfortable'
//       secondChar = 'Ok'
//       thirdChar = 'Perfect'
//     } else if (title === 'Quality') {
//       firstChar = 'Poor'
//       secondChar = 'What I expected'
//       thirdChar = 'Perfect'
//     } else if (title === 'Length') {
//       firstChar = 'Runs short'
//       secondChar = 'Perfect'
//       thirdChar = 'Runs long'
//     } else if (title === 'Fit') {
//       firstChar = 'Runs tight'
//       secondChar = 'Perfect'
//       thirdChar = 'Runs Long'
//     }
//   }


//   return (
//     <div>CHARACTERISTICS HERE</div>
//   );
// };

//   // return (
//   //   <div className="relative w-full h-16">
//   //   {Object.entries(characteristics).map(([key, value]) => (
//   //     <div key={key}
//   //     className="absolute h-12 w-14 text-center bottom-0 transform -translate-x-1/2"
//   //     style={{left: getArrowPosition(value)}}
//   //     onMouseEnter={() => setHoveredScore(value)}
//   //     onMouseLeave={() => setHoveredScore(null)}
//   //     >
//   //     <div className="w-4 h-4 mb-1 rounded-full bg-gray-500"> </div>
//   //     <div className="text-xs font-medium">{key}</div>
//   //      </div>
//   //   ))}
//   //   </div>
//   // )

//   // const totalReviews = reviews.length
//   // const [rating, setRating] = useState(0)
//   // // const [characteristics, setCharacteristics]  = useState()

//   // useEffect(() => {
//   //   let score = 0
//   //   for (let i = 0; i < totalReviews; i++) {
//   //     score += reviews[i].rating
//   //   }
//   //   score = score/totalReviews
//   //   setRating(Math.round(score * 10)/10)
//   // }, [reviews])

//   // const characteristics = metaData.characteristics ? Object.entries(metaData.characteristics) : []

//   // const getScaleColor = (value) => {
//   //   if (value <= 2) {
//   //     return "bg-red-500";
//   //   } else if (value <= 3) {
//   //     return "bg-yellow-500"
//   //   } else if (value <= 4) {
//   //     return "bg-green-500"
//   //   } else {
//   //     return "bg-blue-500"
//   //   }
//   // }

//   // return (
//   //   <>
//   //   <div></div>
//   //    {characteristics.length > 0 ? (
//   //   <div className="flex flex-col gap-2">
//   //   {characteristics.map(([name, value]) => (
//   //     <div className="flex items-center gap-2" key={name}>
//   //     <div className="w-32">{name}</div>
//   //     <div
//   //     className={classnames(
//   //       "w-full h-4 rounded-full",
//   //       getScaleColor(value.value)
//   //     )}
//   //     style={{width: `${(value.value/5) * 100}%`}}
//   //     ></div>
//   //     <div className="w-8">{Math.round(value.value * 100)/100}</div>
//   //      </div>
//   //   ))}
//   //   </div>
//   //   ) : (<div>Loading....</div>)}
//   //   </>
//   // )

// export default ProductBreakdown

