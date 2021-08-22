import React from 'react';
import NavBar from './components/shared/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home/home';
import MonToFri from './views/MonToFri';
import About from './views/About';
import Archive from './views/Archive';
function App() {
	return (
		<>
			<Router>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/mon-to-fri">
							<MonToFri />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/archive">
							<Archive />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	);
}

export default App;
