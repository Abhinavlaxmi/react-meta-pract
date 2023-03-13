import React from 'react'

const MealsContext = React.createContext();
const todaysMeals = ["Sambhar", "Lemon Rice", "Tandoor", "Raita", "Butter Paneer", "Dosa"];

const Provider = ({children}) => {
    const [meals, setMeals] = React.useState(todaysMeals)
  return (
    <MealsContext.Provider value={{meals}}>
        {children}
    </MealsContext.Provider>
  )
}

export const useMealsList = () => React.useContext(MealsContext)

export default Provider;