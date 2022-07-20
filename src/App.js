import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HighNoon from './components/HighNoon';
//import Layout from './components/Layout';

const App = () => {

	document.title = "";

	return (
		<BrowserRouter basename="/">
			<HighNoon/>
      {/* <Layout/> */}
		</BrowserRouter>
	);
};

export default App;