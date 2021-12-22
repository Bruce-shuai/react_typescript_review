import './App.css';
import { Box } from './components/context/Box';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { ThemeContextProvider } from './components/context/ThemeContext';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <ThemeContextProvider>
        <Box />
        <User />
      </ThemeContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
