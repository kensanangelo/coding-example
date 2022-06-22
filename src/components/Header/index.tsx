import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>Dog App</h1>
			<nav className='header__nav'>
				<Link className='header__link' to='#'>
					Home
				</Link>
				<Link className='header__link' to='#'>
					About
				</Link>
				<Link className='header__link' to='#'>
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
