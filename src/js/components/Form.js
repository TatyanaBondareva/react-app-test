import React, { Component } from 'react';

export class Form extends Component {
	render() {
		return <div className="app__form_container app__form_container__add_member">
			<div className="form_container__header form_container__header__green">Добавить участника</div>
				<form className="app__form">
					<label className="form__label">Имя и фамилия</label>
        			<input type="text" className="form__input" onChange={this.props.typeName} value={this.props.name} required/>
        			<label className="form__label">Количество очков</label>
        			<input type="number" className="form__input" onChange={this.props.typeNumber} value={this.props.points} min="1"  required pattern="#[0-9]+$"/>
        			<button className="form__button" onClick={this.props.addMemberInList}><span>Добавить</span><div className="form__button__arrow"></div></button>
        		</form>
     		 </div>
		}
	}