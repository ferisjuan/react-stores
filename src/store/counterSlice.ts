import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from './store'

import { useDispatch } from 'react-redux'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: {payload: number}) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    }
  }
})

export const useCounter = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
    reset: () => dispatch(reset())
  }
}

export default counterSlice.reducer
