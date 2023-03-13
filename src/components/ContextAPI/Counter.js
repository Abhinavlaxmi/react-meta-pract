import React from 'react';
import { useMealsList } from './Provider';

const Counter = () => {
    const {meals} = useMealsList()
  return (
    <div>
        <h1>Here the total number of meals : {meals.length}</h1>
    </div>
  )
}

export default Counter