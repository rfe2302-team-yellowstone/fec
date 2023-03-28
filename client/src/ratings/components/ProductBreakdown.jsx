import React, { useState, useEffect } from "react";
import Characteristics from './Characteristics.jsx'
import classnames from 'classnames'

const ProductBreakdown = ({ reviews, metaData }) => {

  const [hoveredScore, setHoveredScore] = useState(null)

  const [characteristicsUpdated, setCharacteristicsUpdated] = useState(false)

  const [characteristics, setCharacteristics] = useState({})
  const [characteristicRatings, setCharacteristicRatings] = useState({})
  const [rightEMval, setRightEMval] = useState({})
  const [characteristicsEntries, setCharacteristicsEntries] = useState([])

  useEffect(() => {
    const newCharacteristics = {}
    const newCharacteristicRatings = {}
    const newRightEMval = {}

    for (let key in metaData.characteristics) {
      newCharacteristics[key] = metaData.characteristics[key].value
      const percentage = (metaData.characteristics[key].value) / 5 * 100
      newCharacteristicRatings[key] = percentage
      newRightEMval[key] = (-18.5 + (percentage * .17)).toString() + 'em'
      // console.log(newCharacteristicRatings)
    }

    setCharacteristics(newCharacteristics)
    setCharacteristicRatings(newCharacteristicRatings)
    setRightEMval(newRightEMval)

    setCharacteristicsEntries(Object.entries(newCharacteristics))

  }, [metaData])

  const getArrowPosition = (score) => {
    const scoreValues = Object.keys(score).map(Number)
    const position = score / 5 * 100
    return `${position}%`
  }

 const renderCharacteristicComponent = ([title, value]) => {
  return (
    <div className="mb-6" key={title}>
      <div className="font-bold mb-2">{title}</div>
      {getProductBreakdownBar(title, value)}
    </div>
  )
 }

  const getProductBreakdownBar = (title, value) => {
    const characteristicMap = {
      Size: ["A size too small", "Perfect", "A size too wide"],
    Width: ["Too narrow", "Perfect", "Too wide"],
    Comfort: ["Uncomfortable", "Ok", "Perfect"],
    Quality: ["Poor", "What I expected", "Perfect"],
    Length: ["Runs short", "Perfect", "Runs long"],
    Fit: ["Runs tight", "Perfect", "Runs long"],
    }
    const characteristicValues = characteristicMap[title]
    const percentage = (parseFloat(value) / 5) * 100
    const triangleWidth = 10 //px
    const totalBarWidth = 200 // px
    const position = percentage * (totalBarWidth - triangleWidth) / 100
    // console.log(position)
    const trianglePosition = position - 4.5
    return (
      <div className="flex flex-col items-center">

        <div className="relative w-full h-3 bg-gray-300 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `${percentage}%`}}></div>
          {/* <div className="absolute top-0 left-0 h-full bg-gray-400" style={{width: `${100 - percentage}%`}}></div> */}
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full" style={{left: `{${percentage}%}`}}>
            ▲
          </div>
        </div>
        <div className="flex justify-between w-full mt-2 text-sm text-gray-500">

          <div>{characteristicValues[0]}</div>
          <div>{characteristicValues[1]}</div>
          <div>{characteristicValues[2]}</div>
        </div>
        <div className="relative w-full mt-2">
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full" style={{left: `${percentage}%`, marginTop:"-15px"}}>
            ▲
          </div>
          {/* <span className="absolute w-0 h-0 border-t border-transparent border-solid border-l-4 border-r-4"
            style={{borderBottomColor: "#38a169", marginLeft: `${trianglePosition}%`, top: "100%", left: "50%"}}> ▲</span> */}
        </div>
      </div>
    );


  }

    return (
      <div>
        {characteristicsEntries.length === 0 ? (
          <div>
            Nothing here
          </div>
        ) : (
          <div>
            {/* {console.log(Object.entries(characteristics))} */}
            {characteristicsEntries.map(renderCharacteristicComponent)}
          </div>
        )}
      </div>
    );
        }
export default ProductBreakdown