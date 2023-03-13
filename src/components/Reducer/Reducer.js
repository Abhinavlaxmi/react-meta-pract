import React from 'react'
import { useReducer } from 'react'

const conditions = (state, action) =>{
    if(action.type === 'ride') return {money: state.money + 30}
    if(action.type === 'fuel') return {money: state.money - 50}
    return new Error();
}
const Reducer = () => {

    const initialState = {money:100};
    const [state, dispatch] = useReducer(conditions, initialState)
  return (
    <div>
        <h1>Wallet:{state.money}</h1>
        <div>
            <button onClick={()=> dispatch({type:'ride'})}>
                Add Fuel!!
            </button>
            <button onClick={()=> dispatch({type:'fuel'})}>
                Use Fuel!!
            </button>
        </div>
    </div>
  )
}

export default Reducer