import React from 'react';

type ProductProps = {
	name: string;
	price: number;
	description: string;
	image: string;
};

const Product = ({ description, image, name, price }: ProductProps) => {
	return (
		<li className='w-full'>
			<div className='flex justify-center align-middle'>
				<img src={image} alt='' className="w-full h-full object-cover"/>
			</div>
			<div>
				<h2 className='font-bold uppercase'>{name}</h2>
				<p>{description}</p>
			</div>
			<div className='flex'>
				<p className='font-bold'>${price}</p>
			</div>
		</li>
	);
};

export default Product;
