import './App.css';
import { RandomNumber } from './components/restriction/RandomNumber';
function App() {
  return (
    <div className="App">
      {/* isPositive isNegative isZero不给值就默认为true */}
      {/* 这里做了限制，isPositive isNegative isZero 三者只能选其一 */}
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
