
import React, { Component } from 'react';

import NoteService from './NoteService';

export default class UpdateNote extends Component {

  constructor(props) {
      super(props);
      this.noteService = new NoteService();


      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);


      this.state = {
        _id: '',
        desc: ''
      };
  }

  componentDidMount(){

    let id =this.props.match.params.id;
    var thisRef = this;
    this.noteService.get(id, function(data){
      thisRef.setState(data);
    });
  }

  handleChange(event) {

    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var thisRef = this;
    
    this.noteService.update(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/editnotes');
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
            <button type="button" className="btn btn-default" onClick={this.handleCancel}>Back to Index</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
