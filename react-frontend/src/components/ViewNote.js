import React, { Component } from 'react';


export default class ViewNote extends Component {


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
