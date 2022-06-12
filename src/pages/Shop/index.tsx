import { products } from 'data/products';
import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './components/Product';

const Shop = () => {
	const { category } = useParams();
	console.log(category);

	return (
		<div className='px-8 flex flex-col gap-4'>
			<div className='flex justify-center md:justify-between align-middle px-4 py-4 flex-col md:flex-row'>
				<div>
					<h2 className='font-bold text-2xl uppercase text-slate-600'>
						Home/Shop/{category}
					</h2>
				</div>
				<div className='flex gap-3 align-middle flex-col md:flex-row'>
					<div>Showwing 1-12 of {products.length} products</div>
					<div className='flex align-middle'>
						<select name='Sort' id='' className='p-2 border border-slate-400 focus:border-none'>
							{/* Sort mechanisms of products */}
							<option value='A-Z'>A-Z</option>
							<option value='Sort by popularity'>
								Sort by popularity
							</option>
							<option value='Sort by average rating'>
								Sort by average rating
							</option>
							<option value='Sort by latest'>
								Sort by latest
							</option>
						</select>
					</div>
				</div>
			</div>
			<div className='flex justify-between w-full'>
				<div className='w-64 max-w-[12rem] hidden md:block'>
					<h2 className='font-bold text-xl'>Products/{category}</h2>
					<ul className='flex flex-col gap-4 p-3'>
						{products.slice(1, 6).map((product) => (
							<li className='flex gap-2' key={product.id}>
								<img src={product.image} alt='' className='h-12 w-12' />
								<div>
									<p>{product.name}</p>
									<p>
										${product.price} - $
										{product.price - 10 * 5}{' '}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className='p-4 w-full'>
					{/* <h2>Products/{category}</h2> */}
					<ul className='basis-4/5 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-2'>
						{products.slice(1,8).map((product) => (
							<Product {...product} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Shop;
