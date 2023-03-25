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
      console.log(newCharacteristicRatings)
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
    <div className="mb-6" key="value">
      <div className="font-bold mb-2">{title}</div>
      {getProductBreakdownBar(title, value)}
    </div>
  )
 }


  const getProductBreakdownBar = (title, value) => {
    console.log(title, value, '-------GETPRODUCTBREAKDOWNBAR------')
    let firstChar, secondChar, thirdChar;
    if (title === 'Size') {
      firstChar = 'A size too small'
      secondChar = 'Perfect'
      thirdChar = 'A size too wide'
    } else if (title === 'Width') {
      firstChar = 'Too narrow'
      secondChar = 'Perfect'
      thirdChar = 'Too wide'
    } else if (title === 'Comfort') {
      firstChar = 'Uncomfortable'
      secondChar = 'Ok'
      thirdChar = 'Perfect'
    } else if (title === 'Quality') {
      firstChar = 'Poor'
      secondChar = 'What I expected'
      thirdChar = 'Perfect'
    } else if (title === 'Length') {
      firstChar = 'Runs short'
      secondChar = 'Perfect'
      thirdChar = 'Runs long'
    } else if (title === 'Fit') {
      firstChar = 'Runs tight'
      secondChar = 'Perfect'
      thirdChar = 'Runs Long'
    }

    const percentage = (parseFloat(value) / 5) * 100
    const barWidth = 40
    const triangleSize = 4
    return (
      <div className="relative">
        <div className="h-2 w-full bg-gray-300 rounded-full">
          <div className="h-full bg-green-500 prounded-full" style={{width: `${percentage}`}}></div>
        </div>
        <div className="absolute -top-3" style={{left: `${percentage}%`, transform: `translate(-${triangleSize}px, 0)`}}
        >
          <div className="w-0 h-0 border-t-4 border-r-4 border-b-0 border-l-4 border-gray-600 transform rotate-45"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <div>{firstChar}</div>
          <div>{secondChar}</div>
          <div>{thirdChar}</div>
        </div>
      </div>
    )
    }

    return (
      <div>
        {characteristicsEntries.length === 0 ? (
          <div>
            Nothing here
          </div>
        ) : (
          <div>

            {console.log(Object.entries(characteristics))}
            {characteristicsEntries.map(renderCharacteristicComponent)}
          </div>
        )}
      </div>
    );
        }
export default ProductBreakdown