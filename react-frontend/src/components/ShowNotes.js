import React, { Component } from 'react';
import NoteService from './NoteService';
import axios from 'axios';
import OneNote from './OneNote';

export default class ShowNotes extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.noteService = new NoteService();

      //bind

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
            return <OneNote onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
        })
      }
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
            <p>Click on the note description to view it!</p>
              <table id="note-list" className="table table-bordered">
                <tbody>
                  {this.tabRow()}
                </tbody>
              </table>
            </div>
            <div className="panel-footer">

              <button onClick={this.handleIndex} className="btn btn-info">Back to Index</button>
            </div>
          </div>
        </div>
      );
    }
  }
