import { Search, ShoppingBasket } from '@mui/icons-material';
import React from 'react';

const HeaderMiddleBar = () => {
	return (
		<div className='flex justify-between px-20 py-10 bg-green-400'>
			{/* Logo */}
			<div className='flex align-middle justify-center '>
				<h2 className='font-bold text-4xl italic'>WonderLand</h2>
			</div>
			{/* Middle text */}
			<div className='flex align-middle justify-center'>
				<h2 className='font-bold text-3xl uppercase'>
					24 Hours Marijuana delivery
				</h2>
			</div>
			{/* Right */}
			<div className='flex space-x-4 align-middle'>
				{/* Search */}
				<div className='h-10 w-10 flex align-middle justify-center border-2 border-blue-500 rounded-md'>
					<Search fontSize='large' />
				</div>
				{/* Cart components */}
				<div className='relative flex align-middle justify-between'>
					<button className='border-none peer flex align-middle justify-center text-white space-x-3'>
						<span className='flex align-middle uppercase'>
							cart/$0.0
						</span>{' '}
						<ShoppingBasket />
					</button>
					<div className='hidden absolute -bottom-14 peer-focus:block shadow-md p-3 rounded-md h-fit w-64 right-0 bg-slate-100 text-slate-500'>
						There are no products in cart
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMiddleBar;
