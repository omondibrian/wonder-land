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
	{ title: 'Email us', icon: <Mail /> },
	{ title: '24HRS', icon: <Timeline /> },
	{ title: 'Email us', icon: <Phone /> },
];
const HeaderFlier = () => {
	return (
		<div className='flex align-middle w-full justify-center md:justify-between bg-black text-white px-5 py-4'>
			<ul className='flex space-x-2'>
				{contactLinks.map(({ icon, title }, index) => (
					<li className='flex space-x-1'>
						<div>{icon}</div>
						<div>{title}</div>
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
