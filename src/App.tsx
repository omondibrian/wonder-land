import Layout from 'components/Layout';
import HomePage from 'pages/Homepage';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Layout>
					<Routes>
						<Route index element={<HomePage />} />
					</Routes>
				</Layout>
			</Router>
		</React.Fragment>
	);
}

export default App;
