import React from 'react';
const recents = [
	'How to Roll a Marijuana Joint',
	'How to Use CBD Oil for Erectile Dysfunction',
	'cannabis infused gummies recipe',
	'states likely to legalize recreational marijuana in 2021',
	'cannabis delivery',
];
const FooterRecent = () => {
	return (
		<div className='flex-1 basis-1/4'>
			<h2 className='p-2 font-bold text-2xl uppercase'>Recent</h2>
			<ul>
				{recents.map((recent, index) => (
					<li key={index} className='px-4 py-2 border-b-2 text-white'>
						<p>{recent}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterRecent;
