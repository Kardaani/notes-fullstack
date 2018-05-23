import React, { Component } from 'react';
import NoteService from './NoteService';
import axios from 'axios';
import DeleteNote from './DeleteNote';

export default class EditNotes extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.noteService = new NoteService();

      //bind
      this.onDelete = this.onDelete.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleIndex = this.handleIndex.bind(this);
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

    tabRow(){
      if(this.state.items instanceof Array){

        var thisRef = this;
        return this.state.items.map(function(object, i){
            return <DeleteNote onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
        })
      }
    }

    onDelete(event) {
      let id = event.target.id;
      var thisRef = this;
      this.noteService.delete(id,()=>{
        thisRef.fillData();
      });
    }

    onUpdate(event) {
      let id = event.target.id;
      this.props.history.push('/update/'+id);
    }

    handleAdd() {
      this.props.history.push('/add');

    }
    handleIndex() {
      this.props.history.push('/');
    }

    render() {
      return (
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">List of Notes</div>
            <div className="panel-body">
            <p>Click on the note description to edit</p>
              <table id="note-list" className="table table-bordered">
                <tbody>
                  {this.tabRow()}
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <button onClick={this.handleAdd} className="btn btn-info">New note</button>
              <button onClick={this.handleIndex} className="btn btn-info">Back to Index</button>
            </div>
          </div>
        </div>
      );
    }
  }
