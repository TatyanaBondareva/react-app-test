import React, { Component } from 'react';

export class Form extends Component {
	render() {
		return <div className="app">
        <input type="text"  onChange={this.props.typeName} value={this.props.name}/>
        <input type="number" onChange={this.props.typeNumber} value={this.props.points}/>
        <button type="submit" onClick={this.props.addMemberInList}>add</button>
      </div>
	}
}