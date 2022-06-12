import React from 'react';
const services = [
	{
		id: 1,
		img: '/chockolate.jpg',
		title: 'OUR SERVICES',
		body: `You are a cannabis user and we are the number one resource for all your marijuana needs. You are our number one priority and we pride ourselves on providing quality, inexpensive cannabis products to you,
        the customer, as quickly and discreetly as possible.`,
	},
	{
		id: 2,
		img: '/chockolate.jpg',
		title: 'ALL YOU NEED TO KNOW ABOUT US',
		body: `We are a premium cannabis delivery service providing the best adult-use cannabis brands in the United States! We believe our customers deserve the best and that’s why we do everything we can to provide the best marijuana and weed infused products on the market to you, the customer.`,
	},
	{
		id: 3,
		img: '/chockolate.jpg',
		title: 'NO CUSTOMS OR DUTY FEES!',
		body: 'We pay these fees so you don’t have to! The total billed at checkout is the final amount you pay, inclusive of VAT, with no additional charges at the time of delivery!',
	},
];
const Services = () => {
	return (
		<div className='flex justify-center p-8'>
			<ul className='flex flex-col md:flex-row felx-wrap space-x-4'>
				{services.map(({ body, id, img, title }) => (
					<li key={id} className="basis-72 grow border-slate-500 border-w">
						<div className='flex justify-center mb-2'>
							<img src={img} alt='' className='h-12 w-12 rounded-full' />
						</div>
						<h2 className='uppercase text-center text-lg mb-2 text-slate-500'>{title}</h2>
						<p className='text-center'>{body}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Services;
