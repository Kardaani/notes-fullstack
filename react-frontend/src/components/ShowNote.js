import React, { Component } from 'react';
import axios from 'axios';
import NoteService from './NoteService';

export default class ShowNote extends Component {

  constructor(props) {
      super(props);
      this.noteService = new NoteService();



      this.handleIndex = this.handleIndex.bind(this);


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

  handleIndex() {
    this.props.history.push('/');
  }





  render() {
    return (
      <div className="container">

          <div className="panel panel-default">
            <div className="panel-heading">Show Note</div>
            <div className="panel-body">
            <p>Note description</p>
              <input type="hidden" value={this.state._id} />
                  <input type="text" value={this.state.desc} className="form-control"/>
            </div>
            <div className="panel-footer">

            <button onClick={this.handleIndex} className="btn btn-info">Back to Index</button>
            </div>
          </div>
        
      </div>
    );
  }
}
