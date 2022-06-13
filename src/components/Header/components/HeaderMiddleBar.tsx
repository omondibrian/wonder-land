import { Close, Dehaze, Search, ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
const HeaderMiddleBar = ({ setSidebarOpen, sidebarOpen }: Props) => {
	const navigate = useNavigate();

	

	return (
		<div
			className={`flex order-1 md:order-2 justify-around md:justify-between px-4 md:px-12 py-2  md:py-4 bg-[#90ED98] w-full`}
		>
			{/* Clickable  */}
			<div
				className='flex align-middle justify-center md:hidden'
				onClick={(e) => {
					setSidebarOpen(true);
				}}
			>
				<Dehaze />
			</div>
			<div
				className={
					sidebarOpen
						? 'fixed z-10 left-0 top-0 peer-focus:flex flex flex-col md:hidden h-screen w-screen bg-slate-800 bg-opacity-50'
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
			{/* Logo */}
			<div className='flex align-middle justify-center cursor-pointer'>
				<div
					className='font-bold text-md  align-middle hidden sm:block tex-sm h-full  lg:text-4xl italic'
					onClick={(e) => {
						e.preventDefault();
						navigate('/');
					}}
				>
					<img src={'/logo.png'} alt='logo' className='h-12' />
				</div>
			</div>
			{/* Middle text */}
			<div className='flex align-middle justify-center'>
				<h2 className='font-bold text-md hidden text-white md:block lg:text-3xl uppercase'>
					24 Hours Marijuana delivery
				</h2>
			</div>
			{/* Right */}
			<div className='flex space-x-4 align-middle'>
				{/* Search */}

				<Search className='hidden h-6 w-6 md:h-10 md:w-10 md:flex align-middle justify-center border-2 border-blue-500 rounded-md' />
				{/* More navs */}
				<div className='flex align-middle justify-center md:hidden'>
					<ul className='flex space-x-1'>
						<li>
							<Link to='/' className='text-sm'>
								About{' '}
							</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>
								Shipping{' '}
							</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>
								Faqs
							</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>
								Blogs
							</Link>
						</li>
					</ul>
				</div>
				{/* Cart components */}

				<div className='relative flex align-middle justify-between'>
					<div className='border-none peer flex align-middle justify-center text-white space-x-1 md:space-x-3'>
						<div className=' align-middle uppercase hidden md:flex'>
							cart/$0.0
						</div>{' '}
						<div className='flex align-middle'>
							<ShoppingBasket fontSize='small' />
						</div>
					</div>
					{/* <div className='hidden absolute -bottom-14 peer-focus:block shadow-md p-3 rounded-md h-fit w-64 right-0 bg-slate-100 text-slate-500'>
						There are no products in cart
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default HeaderMiddleBar;
