import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    return(
      <div className="navitem" id={this.props.item}>
        <Link to={this.props.tolink}
        onClick={this.props.activec.bind(this, this.props.item)}>
        {this.props.item}
        </Link>
      </div>
    )
  }
}

export default NavItem
