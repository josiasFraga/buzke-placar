import React from 'react';

import store from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import AppRoutes from './constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-block-ui/style.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
	
	return (
		<BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
			<ToastContainer hideProgressBar={true} />
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</BrowserRouter>
	)

}
