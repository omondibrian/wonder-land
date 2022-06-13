import React from 'react';
import {
	Facebook,
	Instagram,
	Mail,
	MailOutlined,
	Phone,
	Timeline,
	Twitter,
} from '@mui/icons-material';

const contactLinks = [
	{ title: 'Email us', icon: <Mail fontSize='small'/> },
	{ title: '24HRS', icon: <Timeline fontSize='small'/> },
	{ title: 'Email us', icon: <Phone fontSize='small'/> },
];
const HeaderFlier = ({scrolled}:{scrolled:boolean}) => {
	return (
		<div className={`flex order-2 md:order-1 align-middle py-2 w-full justify-center md:justify-between bg-black text-white md:px-5 md:py-4 ${scrolled && 'hidden'}`}>
			<ul className='flex space-x-2'>
				{contactLinks.map(({ icon, title }, index) => (
					<li className='flex space-x-1 align-middle'>
						<div className='flex align-middle'>{icon}</div>
						<div className='text-sm'>{title}</div>
					</li>
				))}
			</ul>
			<ul className=' align-middle space-x-2 hidden md:flex'>
				<li className='flex justify-center align-middle space-x-1 mr-1'>
					<MailOutlined fontSize='small' />
					<span className='uppercase'>NewsLetter</span>
				</li>
				<li>
					<Facebook fontSize='small' />
				</li>
				<li>
					<Instagram fontSize='small' />
				</li>
				<li>
					<Twitter fontSize='small' />
				</li>
				<li>
					<MailOutlined fontSize='small' />
				</li>
			</ul>
		</div>
	);
};

export default HeaderFlier;
