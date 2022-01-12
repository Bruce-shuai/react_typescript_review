import './App.css';
import {Private} from './components/auth/Private';
import {Profile} from './components/auth/Profile';
function App() {
  return (
    <div className="App">
      {/* 这里直接进行组件作为属性进行传递 */}
      <Private isLoggedIn={true} Component={Profile}/>
    </div>
  );
}

export default App;
