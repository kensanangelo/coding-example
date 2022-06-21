import './header.scss';

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>Dog App</h1>
			<nav className='header__nav'>
				<a className='header__link' href='#'>
					Home
				</a>
				<a className='header__link' href='#'>
					About
				</a>
				<a className='header__link' href='#'>
					Contact
				</a>
			</nav>
		</header>
	);
};

export default Header;
