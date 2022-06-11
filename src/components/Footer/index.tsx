import React from 'react';
import FooterRecent from './FooterRecent';
import FooterTags from './FooterTags';
import FooterWeedSeeds from './FooterWeedSeeds';
import FooterDelivery from './FooterDelivery';


const Footer = () => {
	return (
		<footer className=''>
			<div className='flex p-6 justify-around gap-4 w-full flex-wrap md:flex-nowrap bg-[#777777] text-white'>
				<FooterRecent />
				<FooterTags />
				<FooterWeedSeeds />
				<FooterDelivery />
			</div>
      <div className='p-4 bg-[#5B5B5B]'>
        Copyright {new Date().getFullYear() }&copy;  Wonderland
      </div>
		</footer>
	);
};

/*
- Registration
- Inbox
- 
*/

export default Footer;
