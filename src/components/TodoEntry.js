import React from 'react';

class TodoEntry extends React.Component {
  onSubmitTodo = (event, props) => {
    event.preventDefault();
    let newDate = event.target.elements.date.value;
    let newContent = event.target.elements.content.value;
    let newTodo = {
      date: newDate,
      content: newContent,
      id: Date.now()
    };
    this.props.addNewTodo(newTodo);
    console.log(newTodo);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTodo}>
          <div>
            <input type="text" name="date" placeholder="date" />
          </div>
          <div>
            <input type="text" name="content" placeholder="content" />
          </div>
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default TodoEntry;
