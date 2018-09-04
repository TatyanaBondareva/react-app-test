import React, { Component } from 'react';

export class List extends Component {
	render() {
		return <div className="app__form_container">
    				<div className="form_container__header form_container__header__violet">Лидеры</div>
    					<div className={this.props.classNameOfText}>Нет участников</div>
        				<ul className="app__list">
        					{this.props.listOfMembers }
        				</ul>
        				<div className="app__toggles">{this.props.blockOfToggles}</div>
        			</div>
        		
	}
}