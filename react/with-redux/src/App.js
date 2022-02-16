import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { Form } from './components/Form'
import { Text } from './components/Text'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Button />
      <Form />
      <Text />
    </div>
  );
}

export default App;
