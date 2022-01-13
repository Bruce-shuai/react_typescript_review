import './App.css';
import { Text } from './components/polymorphic/Text';
function App() {
  return (
    <div className="App">
      <Text as='a' size="lg">Heading</Text>
      <Text as='p' size="md">Paragraph</Text>
      <Text as='label' size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
