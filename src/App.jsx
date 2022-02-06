import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './Components/ToDoList';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1 className='heading'>TO-DO LIST</h1>
        <ToDoList />
      </div>
    )
  }
}

export default App;
