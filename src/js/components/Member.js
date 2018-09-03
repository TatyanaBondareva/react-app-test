import React, { Component } from 'react';
import '../../assets/styles/List.scss';

export class Member extends Component {
	render() {
		return (
			<div className="app__member">
        		<div className="member__name">{this.props.name}</div>
        		<div className="member__points">{this.props.points} очков</div>
      		</div>
      	);
	}
}