import React, { Component } from 'react';

class ProjectItem extends Component {

  handleDelete(id){
    //var toDelete = project.id
    //console.log(id)
    this.props.deleteProjectId(id)
  }

  render() {
    return (
      <div>
        <li>
        {this.props.project.title} + ":" +{this.props.project.category}
           <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)}>  delete</a>
        </li>
      </div>
    );
  }
}

export default ProjectItem;
