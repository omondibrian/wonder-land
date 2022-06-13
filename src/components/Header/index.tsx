import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBottom from './components/HeaderBottom';
import HeaderFlier from './components/HeaderFlier';
import HeaderMiddleBar from './components/HeaderMiddleBar';

type Props = {};

const Header = (props: Props) => {
	// Sticky on scroll amount greater than 200px
	const [sticky, setSticky] = React.useState<boolean>(false);
	const [scrollY, setScrollY] = React.useState<number>(0);
	React.useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	React.useEffect(() => {
		if (scrollY > 400) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	}, [scrollY]);

	console.log(sticky, scrollY);
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
	React.useEffect(() => {}, [sidebarOpen, location]);
	return (
		<div
			className={`w-full mx-auto flex flex-col ${
				sticky && 'fixed top-0 z-[100]'
			}`}
		>
			<HeaderFlier scrolled={sticky} />
			<HeaderMiddleBar
				setSidebarOpen={setSidebarOpen}
				sidebarOpen={sidebarOpen}
			/>
			<HeaderBottom />
		</div>
	);
};

export default Header;
