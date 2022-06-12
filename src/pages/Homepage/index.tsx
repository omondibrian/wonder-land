import React from 'react';
import Banner from './components/Banner';
import Products from './components/Products';
import Services from './components/Services';

const HomePage = () => {
	return (
		<React.Fragment>
			<div className='flex flex-col'>
				<Banner />
				<Products />
				<Services />
			</div>
		</React.Fragment>
	);
};

export default HomePage;
