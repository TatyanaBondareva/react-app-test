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
    render() {
      let listOfMembers = this.props.list.map((item, index) => {
        let status, check_show, check_min, check_max;
        check_min = 0;
        check_max = 5;
        switch(index) {
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
            status = 'member__no_prize'
        }

        (index > check_max || index < check_min)?(check_show = 'member__no_prize'):(check_show = 'list__member');

        return <li key={index} className={check_show}>
                  <Member
                    name = {item.name}
                    points = {item.points}
                  />
                  <div className={status}></div>
                </li>
      });

      return (
        <List
          listOfMembers = {listOfMembers}
        />
        );
    }
  });

