import './App.css';
import { Container } from './components/Container';
function App() {
  return (
    <div className="App">
      {/* 此时，如果你乱输入style的样式，会报错... */}
      {/* 这种方法在检验你的样式是否有误的优势是非常大的 */}
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;
