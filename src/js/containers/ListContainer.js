import React, { Component } from 'react';
import {createMember, getMembers, addMember} from '../redux/actionsCreator.js';
import '../../assets/styles/List.sass';
import '../../assets/styles/App.sass';
import { Provider, connect } from 'react-redux';
import { store } from '../redux/store.js';
import { mapStateToProps } from '../redux/mapStateToProps.js';
import { List } from '../components/List.js';
import { Member } from '../components/Member.js';

export const ListContainer = connect(mapStateToProps)(
  class extends Component {
    constructor() {
      super();
      this.state = { numberOfFirstVisibleMember: 0, numberOfLastVisibleMember: 5, classNameOfText: 'member__first'}
    }
    toggleMembers() {
      let blockOfToggles = [];
      let count;
      (this.props.list.length > 6 && this.props.list.length%6 != 0)?(count = parseInt(this.props.list.length/6+1)):(count = parseInt(this.props.list.length/6));
      console.log("count", count);
      for (var i = 0, j = 0; i < count; i++, j=j+6) {
        blockOfToggles.push(<button key={i} onClick={this.getListShow.bind(this, j, j+5)}></button>);
      }
      console.log("blockOfToggles", blockOfToggles);
      return blockOfToggles;
    }
    checkListEmpty(list) {
      let classNameOfText = '';
      if(list.length > 0) {
        classNameOfText = 'member__no_prize';
      }
      return classNameOfText;
    }
    getListShow(arg, arg1) {
     console.log(arg, arg1, this.props.list.lenght);
     this.setState({numberOfFirstVisibleMember: arg});
     this.setState({numberOfLastVisibleMember: arg1});
   }
   getStatusOfMember(number) {
    let status;
    switch(number) {
      case 0:
      status = 'member__first';
      break;
      case 1:
      status = 'member__second';
      break;
      case 2:
      status = 'member__third';
      break;
      default:
      status = 'member__no_prize';
      break;
    }
    return status;
  }
  getListOfMembers() {
    let listOfMembers;
    listOfMembers = this.props.list.map((item, index) => {
      let status = this.getStatusOfMember(index);
      let classNameOfVisibleMember;
      (index > this.state.numberOfLastVisibleMember || index < this.state.numberOfFirstVisibleMember)?(classNameOfVisibleMember = ''):(classNameOfVisibleMember = 'list__member');
      return <li key={index} className={classNameOfVisibleMember}>
      <Member
      name = {item.name}
      points = {item.points}
      />
      <div className={status}></div>
      </li>
    });
    console.log(listOfMembers);
   // this.checkListEmpty(listOfMembers);
    return listOfMembers;
  }
  render() {
    console.log('=',this.props.list);
    this.toggleMembers();
    return (
      <List
      classNameOfText = {this.checkListEmpty(this.props.list)}
      listOfMembers = {this.getListOfMembers()}
      blockOfToggles = {this.toggleMembers()}
      />
      );
  }
});

