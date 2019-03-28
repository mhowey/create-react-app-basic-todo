import React from 'react';
import '../styles/TodoList.scss';

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        {this.props.todos.map((todo) => {
          return (
            <div>
              <div>{todo.date}</div>
              <div>{todo.content}</div>
              <button
                className="remove-link"
                onClick={() => this.props.removeTodo(todo.id)}
              >
                Remove
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
