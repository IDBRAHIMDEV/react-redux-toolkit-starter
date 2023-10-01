import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../store/features/counter/counterSlice'

const Counter = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const [step, setStep] = useState(1)

    const resetCount = () => {
        setStep(1)
        dispatch(reset())
    }

  return (
    <>
        <div className="text-center">
            <h1 className='my-1'>{ count }</h1>
            <input type="number" value={step} onChange={ (e) => setStep(Number(e.target.value) || 0) } />
            <div className="my-3">
                <button 
                    className="me-3 btn btn-success" 
                    onClick={ () => dispatch(increment(step)) }>+</button>
                <button 
                    className='btn btn-warning' 
                    disabled={!count} 
                    onClick={ () => dispatch(decrement(step)) }>-</button>
            </div>
            <div className="d-grid mt-2">
                <button 
                    className='btn btn-primary' 
                    disabled={!count}
                    onClick={ () => resetCount() }>Reset</button>
            </div>
        </div>
    </>
  )
}

export default Counter