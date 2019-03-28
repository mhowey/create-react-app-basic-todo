import React, { Component } from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [
      {
        date: '2019-03-28',
        content: 'This is the first todo.',
        id: Date.now()
      }
    ]
  };

  addNewTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  removeTodo = (remove) => {
    let newTodos = { todos: [...this.state.todos] };
    newTodos = newTodos.todos.filter((todo) => {
      return todo.id !== remove;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
          <TodoEntry addNewTodo={this.addNewTodo} />
        </header>
      </div>
    );
  }
}

export default App;
