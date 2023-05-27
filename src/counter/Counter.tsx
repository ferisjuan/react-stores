import { useSelector } from 'react-redux';
import { useCounter } from '../store';
import { RootState } from '../store/store';

export function Counter() {
  const { increment, decrement, incrementByAmount, reset } = useCounter();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>{count}</h2>
      <button
        aria-label="Decrement by 5 value"
        onClick={() => incrementByAmount(-5)}
      >
        Decrement by 5
      </button>
      <button
        aria-label="Decrement value"
        onClick={decrement}
      >
        Decrement
      </button>

      <button
        aria-label="Reset value"
        onClick={reset}
      >
        Reset
      </button>

      <button
        aria-label="Increment value"
        onClick={increment}
      >
        Increment
      </button>
      <button
        aria-label="Increment by 5 value"
        onClick={() => incrementByAmount(5)}
      >
        Increment by 5
      </button>
    </div>
  )
}
