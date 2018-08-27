import React, { Component } from 'react';
import {createMember, getMembers, addMember} from '../redux/actionsCreator.js';
import { Form } from '../components/Form.js';
import '../../assets/styles/App.sass';


export class FormContainer extends Component {
 constructor() {
  super();
  this.state = {name: '', points: '', win: 'no'};
}
typeNumber(event) {
  event.preventDefault();
  //  this.state.points = event.target.value;
  this.setState({points: event.target.value});
  console.log(this.state.points);
}
typeName(event) {
  event.preventDefault();
  this.setState({name: event.target.value});
  console.log(this.state.name);
}
addMemberInList(event) {
    createMember(this.state)             /////error///
    console.log('store', store.getState());
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
