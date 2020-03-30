import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Stats from './components/stats/Stats';
import Main from './components/main/Main';
import Quiz from './components/quiz/Quiz';

function App() {
	console.log('app');

	return (
		<Router>
			<Header />
			<Route exact path="/" component={Main} />
			<Route path="/about" component={About} />
			<Route path="/stats" component={Stats} />
			<Route path="/quiz" component={Quiz} />
		</Router>
	);
}

export default App;
