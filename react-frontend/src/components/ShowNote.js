import React, { Component } from 'react';
//import axios from 'axios';
import NoteService from './NoteService';

export default class ShowNote extends Component {

  constructor(props) {
      super(props);
      this.noteService = new NoteService();


      this.handleView = this.handleView.bind(this);
      this.handleNoteslist = this.handleNoteslist.bind(this);


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

  handleNoteslist() {
    this.props.history.push('/shownotes');
  }

  handleView(event) {
    event.preventDefault();
    //reference to the component "this"
    var thisRef = this;
    //View in database
    this.noteService.get(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/:id');
      }
    );
  }



  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleView}>
          <div className="panel panel-default">
            <div className="panel-heading">View Note</div>
            <div className="panel-body">
            <p>Note description</p>
              <input type="hidden" value={this.state._id} />
                  <input type="text" value={this.state.desc}  className="form-control"/>
            </div>
            <div className="panel-footer">

            <button type="button" className="btn btn-default" onClick={this.handleNoteslist}>Back to Notes list</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
