
import React, { Component } from 'react';
import axios from 'axios';
import NoteService from './NoteService';

export default class UpdateNote extends Component {

  constructor(props) {
      super(props);
      this.noteService = new NoteService();

      //bind the instance to each method
      // (So you can use the THIS statement. Otherwise, it will be null)
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);

      //set the initial state
      this.state = {
        _id: '',
        desc: ''
      };
  }

  componentDidMount(){
    //the parameter ID
    let id =this.props.match.params.id;
    var thisRef = this;
    this.noteService.get(id, function(data){
      thisRef.setState(data);
    });
  }

  handleChange(event) {
    //updates the state only for this parameter
    //(_id stays the same)
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //reference to the component "this"
    var thisRef = this;
    //Update in database
    this.noteService.update(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/');
      }
    );
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading">Edit Note</div>
            <div className="panel-body">
            <p>Note description</p>
              <input type="hidden" value={this.state._id} />
                  <input type="text" value={this.state.desc} onChange={this.handleChange}  className="form-control"/>
            </div>
            <div className="panel-footer">
            <button type="submit" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
