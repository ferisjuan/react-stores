import { shallow } from 'zustand/shallow';
import "./App.css";
import { useUserStore } from './store';
import { useBearStore, useUserStore2 } from './store/store';

function App() {
  const [firstName, updateFirstName] = useUserStore(
    (state) => [state.firstName, state.updateFirstName],
    shallow
  );

  // with selectors
  const firstName2 = useUserStore2.use.firstName();

  const bears = useBearStore.use.bears();
  const increase = useBearStore.use.increase();
  const increment = useBearStore.use.increment();

  return (
    <main>
      <div>

        <p>{bears} bears</p>
        <button onClick={() => increase(5)}>increase</button>
        <button onClick={() => increment()}>increment</button>
      </div>
      <label>
        First name
        <input
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>

      <p>
        Hello, <strong>{firstName2}!</strong>
      </p>
    </main>
  );
}

export default App;
