import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' />
			</Routes>
		</Layout>
	);
};

export default App;
