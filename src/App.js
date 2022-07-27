import { React, Card } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HighNoon from './components/HighNoon';
import Navbar from './components/Navbar';
//import Layout from './components/Layout';

function App () {

	{/*	<BrowserRouter basename="/">
		{/*	<HighNoon/>
      {/* <Layout/>
		</BrowserRouter> */}

	return (
		<>
		<Router>
				<Navbar />
				<Routes> 
					<Route path='/' exact />
				</Routes>
				</Router>
		</>
	);
}

export default App;