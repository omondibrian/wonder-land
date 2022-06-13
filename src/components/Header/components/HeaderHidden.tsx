import { Close } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const sideLinks = [
	{ title: 'Home', to: '/' },
	{ title: 'Shop', to: '/shop' },
	{ title: 'About', to: '/about' },
	{ title: 'Contact', to: '/contact' },
];

type Props = {
	sidebarOpen: boolean;
	setSidebarOpen: any;
};

const HeaderHidden = ({ setSidebarOpen, sidebarOpen }: Props) => {
	return (
		<div
			className={
				sidebarOpen
					? 'fixed z-10 left-0 top-0 flex flex-col md:hidden h-screen w-screen bg-slate-800 bg-opacity-50'
					: 'hidden fixed z-10 left-0 top-0  flex-col md:hidden h-screen w-screen bg-slate-800 bg-opacity-50'
			}
		>
			<div className='p-2 bg-slate-50 h-full w-60'>
				<button className='absolute top-2 right-4 bg-white border-none cursor-pointer '>
					<Close
						fontSize='large'
						onClick={(e) => {
							setSidebarOpen(false);
						}}
					/>
				</button>
				<div className='mb-4'>
					<select name='' id=''>
						<option value='some'>Some</option>
						<option value='some'>Some</option>
						<option value='some'>Some</option>
						<option value='some'>Some</option>
					</select>
				</div>
				<hr />
				<div>
					<ul className='flex flex-col gap-2'>
						{sideLinks.map(({ title, to }) => (
							<li key={title} className='flex align-middle'>
								<Link
									to={to}
									className='px-4 w-full hover:bg-slate-400  uppercase font-medium text-md'
								>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeaderHidden;
