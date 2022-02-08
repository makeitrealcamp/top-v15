import { Button } from './components/Button'
import { Counter } from './components/Counter'
import { CounterProvider, CounterContext } from './context/counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        {/* <CounterContext.Consumer>
          {({ count, setCount }) => {
            return (
              <>
                <Counter count={count} />
                <Button setCount={setCount} />
              </>
            )
          }}
        </CounterContext.Consumer> */}
        <Counter />
        <Button />
      </CounterProvider>
    </div>
  );
}

export default App;
