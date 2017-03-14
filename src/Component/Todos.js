import React, { Component } from 'react';
import TodosItem from './TodosItem'

class Todos extends Component {



  render() {
    //console.log(this.props);
    let todosItems;

    if(this.props.todos){
      todosItems = this.props.todos.map( todo => {
        return (
          <TodosItem key={todo.title} Todo={todo}/>
        )
      })
    }


    return (
      <div>
        <h3>My Todos</h3>
        <ul>
          {todosItems}
        </ul>

      </div>
    );
  }
}


export default Todos;
