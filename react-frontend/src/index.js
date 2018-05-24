//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddNote from './components/AddNote';
import ShowNotes from './components/ShowNotes';
import ShowNote from './components/ShowNote';
import UpdateNote from './components/UpdateNote';
import indexNotes from './components/indexNotes'
import EditNotes from './components/EditNotes';
import './index.css';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header/>
      </div>
    </div>
    <div>
      <Router>
      <div>
      <Route path='/addnote' component={AddNote} />
      <Route path='/editnotes' component={EditNotes} />
      <Route path='/shownotes' component={ShowNotes} />
      <Route path='/shownote/:id' component={ShowNote} />
      <Route exact path='/' component={indexNotes} />
      <Route path='/update/:id' component={UpdateNote} />
      </div>
      </Router>
    </div>
  </div>
,
  document.getElementById('root')
);
