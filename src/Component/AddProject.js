import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject : {}
    }
  }

static defaultProps = {
  cats : ['Web Design', 'Web Design2', 'Web Design3']
}

handleSubmit(e){
  console.log("submitted!");
  if(this.refs.title.value === ''){
    alert("Empty title!");
  }else{
    this.setState ({
      newProject : {
        id : uuid.v4(),
        title : this.refs.title.value,
         category : this.refs.category.value
      }
    }, function(){
      //console.log(this.state)
      this.props.addProject(this.state.newProject)
    });
  }

  e.preventDefault();
}

  render() {
    let catsOptions = this.props.cats.map( cat => {
      return (<option key={cat} value={cat}>{cat}</option>)
    })
    //console.log(catsOptions)

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Project Name:
          <input type="text" ref="title"/>
          </label>
          <br/>
          <label>Project Category:
          <select ref="category" >
            {catsOptions}
            </select>
            </label>
            <input value="Submit" type="submit" />
        </div>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  cats: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
