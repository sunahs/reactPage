import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './scss/App.scss';
import UserHome from './page/user/Home.js';
import AdminrHome from './page/admin/Home.js';


function App() {
	return (
		<div className="App">
			{/*<AdminrHome />*/}
			{/*<UserHome />*/}

			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Route exact path="/" component={AdminrHome} />
				<Route path="/user" component={UserHome} />
			</BrowserRouter>
		</div>
	);
}

export default App;
