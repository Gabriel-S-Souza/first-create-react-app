import React, { useEffect, useState } from 'react'

export const EffectExample = () => {
    
    const [counter, setCounter] = useState(0)
    let [color, setColor] = useState("black")

    useEffect(() => {
        const styleColors = ["red", "blue", "green", "pink", "purple", "orange", "gray", "yellow", "brown"].filter((otherColor) => otherColor != color)
        const randomNumber = (Math.random() * (styleColors.length - 1)).toFixed(0)
        setColor(color = styleColors[randomNumber])
    }, [counter])

  return (
        <>
            <h1 style={{color: color}}>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)} >+</button>
        </>
    )
}
