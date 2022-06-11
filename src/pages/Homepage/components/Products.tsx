import React from 'react';
import Product from './Product';

const Products = () => {
	return (
		<ul className='grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 p-8'>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
				<Product key={item} />
			))}
		</ul>
	);
};

export default Products;
