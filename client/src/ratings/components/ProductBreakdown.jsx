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
      <div key={value}>
        <div className="font-bold mb-2">{title}</div>
        {getProductBreakdownBar(title)}
      </div>
    );
  };


  const getProductBreakdownBar = (title, value) => {
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

    const percentage = (parseFloat(value) / 5) * 100;
    const triangleWidth = 10; // in pixels
    const totalBarWidth = 200; // in pixels
    const position = percentage * (totalBarWidth - triangleWidth) / 100;
    const secondCharacteristicPercentage =50
    return (
      <div key={title}>
        <p>{title}</p>
        <div id="metadata-bar">
          <span id="triangle" style={{ left: `${position}%` }}>▲</span>
          <div className="metadata-bar-individual border">
            <div className="metadata-bar-individual" style={{ height: "2em", width: `${percentage}%` }} />
          </div>
        </div>
        <div id="first-characteristic">{firstChar} </div>
        <div id="third-characteristic">{thirdChar}</div>
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
            <div>THIS WORKS BEFORE OBJECT.ENTRIES</div>
            {console.log(Object.entries(characteristics))}
            {characteristicsEntries.map(renderCharacteristicComponent)}
          </div>
        )}
      </div>
    );
        }
export default ProductBreakdown