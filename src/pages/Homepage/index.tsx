import React from 'react';
import Banner from './components/Banner';
import Products from './components/Products';
import Services from './components/Services';

const HomePage = () => {
	return (
		<React.Fragment>
			<Banner />
			<Products />
            <Services/>
		</React.Fragment>
	);
};

export default HomePage;
