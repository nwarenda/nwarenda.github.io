import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HighNoon from './/HighNoon.js';

const Layout = () => {
	return (
		<BrowserRouter>
			<div>
				<Navbar className="top">				
				</Navbar>
				<Container className="mt-4 pt-2 pb-4" fluid>
					<Switch>
					<Route path="/HighNoon">
							<HighNoon/>
					</Route>
					</Switch>
				</Container>
			</div>
		</BrowserRouter>
	);
};

export default Layout;