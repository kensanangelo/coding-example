import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	return (
		<Container>
			<Title>Dog App</Title>
			<Nav>
				<Link to='#'>Home</Link>
				<Link to='#'>About</Link>
				<Link to='#'>Contact</Link>
			</Nav>
		</Container>
	);
};

const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 20px;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 600px) {
		justify-content: space-between;
		flex-direction: row;
		margin-bottom: 40px;
	}
`;

const Title = styled.h1`
	margin-bottom: 20px;
	color: white;

	@media screen and (min-width: 600px) {
		margin: 0;
	}
`;

const Nav = styled.nav`
	display: flex;
`;

const Link = styled(UnstyledLink)`
	position: relative;
	color: #090c0d;
	font-size: 0.8rem;
	text-decoration: none;
	padding-bottom: 1px;

	&:not(:last-child) {
		margin-right: 20px;
	}

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		background-color: #090c0d;
		height: 1px;
		bottom: 0;
		left: 0;
		width: 100%;
		transition: transform 0.3s;
	}

	&::before {
		transform-origin: 0 50%;
		transform: scaleX(0);
	}

	&::after {
		transform-origin: 100% 50%;
		transform: scaleX(1);
		transition-delay: 0.15s;
	}

	&:hover::before,
	&:focus::before {
		transform: scaleX(1);
		transition-delay: 0.15s;
	}

	&:hover::after,
	&:focus::after {
		transform: scaleX(0);
		transition-delay: 0s;
	}
`;

export default Header;
