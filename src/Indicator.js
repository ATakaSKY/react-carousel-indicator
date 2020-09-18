import React, { useRef, useEffect, useState, useCallback } from 'react'

import classes from './Indicator.module.css'

export default function Indicator({ itemsPerSlide, itemGap, children }) {
  const indicatorsRef = useRef(null)
  const itemsRef = useRef(null)
  const [numberOfIndicators, setNumberOfItems] = useState(() => {
    const childrenCount = React.Children.count(children)
    return Math.ceil(childrenCount / itemsPerSlide)
  })

  const calculateIndicatorDimensions = useCallback(() => {
    const childrenCount = React.Children.count(children)
    const numberOfIndicators = Math.ceil(childrenCount / itemsPerSlide)

    for (const item of itemsRef.current.children) {
      item.style.minWidth =
        Math.ceil(itemsRef.current.offsetWidth / itemsPerSlide) - itemGap + 'px'
      item.style.marginRight = itemGap + 'px'
    }

    setNumberOfItems(numberOfIndicators)
  }, [children, itemGap, itemsPerSlide])

  useEffect(() => {
    window.addEventListener('resize', calculateIndicatorDimensions)
    return () => {
      window.removeEventListener('resize', calculateIndicatorDimensions)
    }
  }, [calculateIndicatorDimensions])

  useEffect(() => {
    calculateIndicatorDimensions()
  }, [calculateIndicatorDimensions])

  const indicatorChangeHandler = (e) => {
    const indicatorId = +e.target.dataset.indicator
    for (const indicator of indicatorsRef.current.children) {
      if (indicator.classList.contains(classes.Active)) {
        indicator.classList.remove(classes.Active)
      }
    }
    e.target.classList.add(classes.Active)
    itemsRef.current.style.transform = `translateX(-${
      indicatorId * itemsRef.current.offsetWidth
    }px)`
  }

  return (
    <div className={classes.IndicatorContainer}>
      <div className={classes.IndicatorContent} ref={itemsRef}>
        {children}
      </div>
      <div className={classes.Indicators} ref={indicatorsRef}>
        {[...new Array(numberOfIndicators)].map((btn, index) => (
          <button
            key={index}
            className={`${index === 0 ? classes.Active : ''}`}
            data-indicator={index}
            onClick={indicatorChangeHandler}
          />
        ))}
      </div>
    </div>
  )
}
