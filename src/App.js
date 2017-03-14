import React, { Component } from 'react';
import Projects from './Component/Projects'
import Todos from './Component/Todos'
import uuid from 'uuid'
import $ from 'jquery'

import AddProject from './Component/AddProject'

class App extends Component {

  constructor(){
    super()
    this.state = {
      projects : [
      ]
    }
  }


getProjects(){
  this.setState({
    projects : [
      {
        id : uuid.v4(),
        title : 'Business Website',
        category : 'Web Design'
      },

      {
        id : uuid.v4(),
        title : 'Business Website2',
        category : 'Web Design2'
      },
      {
        id : uuid.v4(),
        title : 'Business Website3',
        category : 'Web Design'
      }
    ]
  })
}

getToDos(){
$.ajax({
  url : 'https://jsonplaceholder.typicode.com/todos',
  dataType: 'json',
  cache: false,
  success: function(data){
    this.setState({todos: data}, function(){
      console.log(this.state)
    });
  }.bind(this),
  error: function(xhr, status,err){
    console.log(err);
  }
})
}

componentDidMount(){
  this.getToDos();
}

  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }


  handleAddProject(project){
    console.log(project)
    var projects = this.state.projects.slice()
    projects.push(project)
    this.setState({projects : projects})

  }

  handleDelete(deleteProjectId){
     console.log(deleteProjectId)
     var projects = this.state.projects.slice().filter( project => {
       return project.id !== deleteProjectId
     })

     this.setState({projects : projects})
  }


  render() {
    return (
      <div >
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} deleteProjectId={this.handleDelete.bind(this)}/>
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
