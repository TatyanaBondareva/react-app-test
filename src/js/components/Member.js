import React, { Component } from 'react';
import '../../assets/styles/List.sass';

export class Member extends Component {
	render() {
		return (
			<div className="app">
        		<div className="member__name">{this.props.name}</div>
        		<div className="member__points">{this.props.points} очков</div>
      		</div>
      	);
	}
}