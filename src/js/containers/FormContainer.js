import React, { Component } from 'react';
import {createMember, getMembers, addMember} from '../redux/actionsCreator.js';
import { Form } from '../components/Form.js';
import '../../assets/styles/App.scss';
import '../../assets/styles/Form.scss';
import { ListContainer } from './ListContainer.js';


export class FormContainer extends Component {
 constructor() {
  super();
  this.state = {name: '', points: '', win: 'no'};
}
typeNumber(event) {
  event.preventDefault();
  this.setState({points: event.target.value});
}
typeName(event) {
  event.preventDefault();
  this.setState({name: event.target.value});
}
addMemberInList(event) {
  event.preventDefault();
  if(this.state.name != null && this.state.name != "" && this.state.points != "" && this.state.points > 0) {
    createMember(this.state)  
    getMembers(); 
    this.setState({name: '', points: '' });
    }         
  }

  render() {
    return <Form 
              name = {this.state.name}
              points = {this.state.points}
              typeName = {this.typeName.bind(this)} 
              typeNumber = {this.typeNumber.bind(this)}
              addMemberInList = {this.addMemberInList.bind(this)}
            />
          }
        }
