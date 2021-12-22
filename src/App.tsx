import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
function App() {
  return (
    <div className="App">
      <Input value='' handleChange={e => console.log(e)}/>
      <Button handleClick={(e, id) => {
        console.log('Button clicked', e, id);
      }}/>
    </div>
  );
}

export default App;
