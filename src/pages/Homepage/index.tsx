import React from 'react';

const HomePage = () => {
	return (
		<div className='flex flex-col space-x-2 '>
			<div className='flex justify-center align-middle  w-full'>
				<img
					src='/wonderland.jpg'
					alt=''
					style={{ maxWidth: '100%' }}
				/>
			</div>
		</div>
	);
};

export default HomePage;
