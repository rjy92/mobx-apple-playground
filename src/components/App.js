import React, { Component } from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'
import TodoExtra from './todoExtra'
import '../styles.css'
// import TestImg from './imgCook'


class App extends Component {
 render () {

  return (
    <section className="todoapp">
      <AddTodo />
      <TodoExtra />
      <TodoList />
    </section>
  );

  // return <TestImg />
 }
}

export default App;
