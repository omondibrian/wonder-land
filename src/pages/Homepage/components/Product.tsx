import { Favorite } from '@mui/icons-material';
import React from 'react';

const Product = () => {
	return (
		<li className='w-full relative'>
			<div className='relative h-64 w-full flex'>{/* Content */}
				<Favorite className='text-red-800'/>
            <img src="/chockolate.jpg" alt="" className='absolute w-full h-full object-cover'/>
			<div className='absoute top-2 right-2 bg-slate-200 rounded-lg'>
			</div>
            </div>
			<div className='flex flex-col space-y-2'>
				{/* About */}
				<p className='uppercase text-sm text-slate-400'>cookies</p>
				<div >
					<p>Natural Cannabis Company 100 Bar THC 100mg</p>
                    <p className='font-bold'>$ 30.00</p>
				</div>
			</div>
		</li>
	);
};

export default Product;
