import './App.css';
import {Greet} from './components/Greet';
import {Person} from './components/Person';
import {PersonList} from './components/PersonList';
import {Status} from './components/Status';
import {Heading} from './components/Heading';
import {Oscar} from './components/Oscar';
function App() {
  const personName = {
      first: 'Bruce',
      last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    }, 
    {
      first: 'Clark',
      last: 'Kent'
    }, 
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='帅得乱七八糟' messageCount={10} isLogin={false}/>
      <Person name={personName}/>
      <PersonList names={nameList} /> */}
      <Status status="loading"/>
      {/* 这种text文本是没有具体的属性可以来概述的，所以需要使用children属性来概述 */}
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
