import React, { Component } from 'react';
import {createMember, getMembers, addMember} from '../redux/actionsCreator.js';
import '../../assets/styles/App.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store.js';
import { FormContainer } from './FormContainer.js';
import { Menu } from '../components/Menu.js';
import { Form } from '../components/Form.js';
import { ListContainer } from './ListContainer.js';

class App extends Component {
componentWillMount() {
getMembers();
}
render() {
return <div className="app">
<Menu />
  <div className="app_container">
    <FormContainer />
    <Provider store={store}>
      <ListContainer />
    </Provider>
  </div>
</div>
}
}
export default App;
