import { Dehaze, Search, ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeaderMiddleBar = () => {
	const navigate = useNavigate();
	return (
		<div className='flex justify-between px-8 md:px-20 py-10 bg-green-400 w-full'>
			{/* Clickable  */}
			<div className='flex align-middle justify-center md:hidden'>
				<Dehaze />
			</div>
			{/* Logo */}
			<div className='flex align-middle justify-center cursor-pointer'>
				<h2
					className='font-bold text-md lg:text-4xl italic'
					onClick={(e) => {
						e.preventDefault();
						navigate('/');
					}}
				>
					WonderLand
				</h2>
			</div>
			{/* Middle text */}
			<div className='flex align-middle justify-center'>
				<h2 className='font-bold text-md hidden md:block lg:text-3xl uppercase'>
					24 Hours Marijuana delivery
				</h2>
			</div>
			{/* Right */}
			<div className='flex space-x-4 align-middle'>
				{/* Search */}
				<div className='hidden h-6 w-6 md:h-10 md:w-10 md:flex align-middle justify-center border-2 border-blue-500 rounded-md '>
					<Search />
				</div>
				{/* More navs */}
				<div className='flex align-middle justify-center md:hidden'>
					<ul className='flex space-x-2'>
						<li>
							<Link to='/' className='text-sm'>About </Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>Shipping </Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>Faqs</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>Blogs</Link>
						</li>
					</ul>
				</div>
				{/* Cart components */}

				<div className='relative flex align-middle justify-between'>
					<button className='border-none peer flex align-middle justify-center text-white space-x-3'>
						<span className=' align-middle uppercase hidden md:flex'>
							cart/$0.0
						</span>{' '}
						<ShoppingBasket />
					</button>
					<div className='hidden absolute -bottom-14 peer-focus:block shadow-md p-3 rounded-md h-fit w-64 right-0 bg-slate-100 text-slate-500'>
						There are no products in cart
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMiddleBar;
