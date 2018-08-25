import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/App';
import { Provider } from 'react-redux';
import { store } from './js/redux/store.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
	registerServiceWorker();
