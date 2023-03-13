import React from 'react'
import { useMealsList } from './Provider'

const MealsList = () => {
    const {meals} = useMealsList();
  return (
    <div>
        <h1>Meal List Context API</h1>
        {meals.map((meal, index)=>(
            <h2 key={index}>{meal}</h2>
        ))}
    </div>
  )
}

export default MealsList