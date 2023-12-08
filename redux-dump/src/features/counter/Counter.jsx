import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from './counterSlice';
import { useState } from 'react';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;
    const subtractValue = Number(incrementAmount) || 0;

    const resetAll = () => {
      setIncrementAmount(0);
      dispatch(reset());
    }


  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div>
          <input type="text" name="" value={decrementAmount} onChange={(e) => setDecrementAmount(e.target.value)} id="" />
        <input type="text" name="" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} id="" />
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(10))}>Add Amount</button>
          <button onClick={() => dispatch(decrementByAmount(10))}>Subtract Value</button>
        </div>
    </section>
  )
}

export default Counter