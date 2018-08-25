import React, { Component } from 'react';

export class Member extends Component {
	render() {
		return <div className="app">
        <div>{this.props.name}</div>
        <div>{this.props.points}</div>
      </div>
	}
}