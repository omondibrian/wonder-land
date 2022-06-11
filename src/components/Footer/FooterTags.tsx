import React from 'react';
import { Link } from 'react-router-dom';
const tags = [
	'anxiety',
	'baggies',
	'cancer',
	'cannabis',
	'creative',
	'edible',
	'flowers',
	'food',
	'gas',
	'sleepy',
];
const FooterTags = () => {
	return (
		<div className='flex-1 basis-1/4'>
			<h2 className='p-2 font-bold text-2xl uppercase mb-4'>Tags</h2>
			<ul className='flex flex-wrap gap-4'>
				{tags.map((tag, index) => (
					<li key={index}>
						<Link
							to={'/'}
							className='px-3 py-1 border-solid divide-x-2 border border-white rounded-md text-white'
						>
							{tag}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterTags;
