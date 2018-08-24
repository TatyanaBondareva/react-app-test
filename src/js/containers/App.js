import React, { Component } from 'react';
import {createMember, getMembers, addMember} from '../redux/actionsCreator.js';
import '../../assets/styles/App.sass';
import { Provider } from 'react-redux';
import { store, connect } from '../redux/store.js';
import { Form } from '../components/Form.js';

class App extends Component {
  componentWillMount() {
   getMembers();
  }
  constructor() {
    super();
    this.state = {name: 'tanya', points: '', win: 'no', list: []};
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
  addMemberInList() {
    createMember(this.state)             /////error///
    console.log('store', store.getState());
  }
  render() {
    return (
      <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <Form 
            name = {this.state.name}
            points = {this.state.points}
            typeName = {this.typeName.bind(this)} 
            typeNumber = {this.typeNumber.bind(this)}
            addMemberInList = {this.addMemberInList.bind(this)}
            />

      </div>
      </Provider> 
    );
  }
}

export default App;
