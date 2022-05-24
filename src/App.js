import { useState } from 'react';
import './App.css';
import AddLabel from './Components/AddLabel.js'
import Tasks from './Components/Tasks';

function App() {
  const [todos, setTodos] = useState([])
  const add = (todo) =>{
    setTodos([...todos,{
      name:todo,
      status:false

    }])
  }
  const deleteTodo = (name) =>{
    let news = todos.filter(el =>   el.name !== name);
    setTodos(news)
  }
  const done = (name) =>{
    let todoss = [...todos];
    let todo = todoss.find(el =>   el.name === name);
    todo.status = !todo.status;
    setTodos(todoss)
  }
  return (
    <div>
      <AddLabel add={add} />
      {
        todos.map(el => (
          <Tasks t={el} del={deleteTodo} done={done}/>
        ))
      }
    </div>
    
  );
}

export default App;
