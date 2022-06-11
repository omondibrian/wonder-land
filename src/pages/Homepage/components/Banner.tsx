import React from 'react';

const Banner = () => {
	return (
		<div className='flex justify-center'>
			<div className='flex flex-col space-x-2 mt-4 max-w-6xl'>
				<div className='flex justify-center align-middle  w-full'>
					<img
						src='/wonderland.jpg'
						alt=''
						style={{ maxWidth: '100%' }}
					/>
				</div>
				<div className='flex justify-center align-middle p-4 '>
					<button className='w-96 bg-rose-300 px-8 py-2 rounded-md '>
						Browse all
					</button>
				</div>
				{/* New arrivals */}
				<div className='flex align-middle justify-center'>
					<div className='text-center text-lg font-bold'>
						New Arrivals
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
