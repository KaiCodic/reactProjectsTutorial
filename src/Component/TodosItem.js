import React, { Component } from 'react';

class TodosItem extends Component {

  render() {
    return (
      <div>
        <li>
        {this.props.Todo.title} + ":" +{this.props.Todo.completed}
        </li>
      </div>
    );
  }
}

TodosItem.propTypes = {
  Todo: React.PropTypes.object
}

export default TodosItem;
