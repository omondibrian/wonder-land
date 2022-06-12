import React from 'react';

const Product = () => {
	return (
		<li className='w-full'>
			<div className='relative h-64 w-full'>{/* Content */}
            <img src="/chockolate.jpg" alt="" className='w-full h-full object-cover'/>
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
