import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ViewNote extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
        <tr>
          <td>

            <a id={this.props.obj._id} onClick={this.props.onView} href="">{this.props.obj.desc}</a>
          </td>
        </tr>
    );
  }
}
