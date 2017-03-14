import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {

  handleDelete(id){
    console.log(id)
    this.props.deleteProjectId(id)
  }

  render() {
    //console.log(this.props);
    let projectItems;

    if(this.props.projects){
      projectItems = this.props.projects.map( project => {
        return (
          <ProjectItem key={project.title} project={project} deleteProjectId={this.handleDelete.bind(this)}/>
        )
      })
    }


    return (
      <div>
        <h3>My Projects</h3>
        <ul>
          {projectItems}
        </ul>

      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  deleteProjectId: React.PropTypes.func
}

export default Projects;
