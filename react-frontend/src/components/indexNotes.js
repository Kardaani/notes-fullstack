import React, { Component } from 'react';
import NoteService from './NoteService';


export default class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.noteService = new NoteService();
this.handleEdit = this.handleEdit.bind(this);
this.handleShow = this.handleShow.bind(this);
    }
    componentWillMount(){
      this.fillData();
    }

    fillData() {
      var thisRef = this;
      this.noteService.all((data)=>{
          thisRef.setState({ items: data });
      })
    }



handleEdit() {
  this.props.history.push('/editnotes');
}
handleShow() {
  this.props.history.push('/shownotes');
}



    render() {
      return (
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">List of Notes Application</div>
            <div className="panel-body">
            <p>This is an application for making Notes.</p>
            <p>Click here to show valid list of Notes! You can edit or add notes from there!</p>

            <button onClick={this.handleEdit} className="btn btn-info">Edit Notes</button>
            <p>You can have a look of current Notes from here!</p>


            <button onClick={this.handleShow} className="btn btn-info">Show Notes</button>

            </div>
          </div>
        </div>
      );
    }
  }
