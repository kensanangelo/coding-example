import styled from 'styled-components';
import Header from '../Header';

const Landing = () => {
	return (
		<Container>
			<Header />
			<MainSection>
				<Content>
					<Title>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Title>
					<Body>
						Donect mauris nisl, consectetur viverra leo vitae, gravida
						iaculis ipsum. Aenean soldales volutpat congue. In eget
						feugiat dolor. Quisque gravida odio tortor, a sollicitudin
						quam dignissim ac. Nulla quis purus dictum, imperdiet est eu,
						pulvinar leo.
					</Body>
				</Content>
				<VideoWrapper>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/s_uiya1WsQ0'
						title='DOGS FREE STOCK VIDEOS WITH DOGS  NO COPYRIGHT VIDEOS'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</VideoWrapper>
			</MainSection>
		</Container>
	);
};

const Container = styled.div`
	padding: 20px;
	background: rgb(111, 151, 167);
	background: linear-gradient(
		90deg,
		rgba(111, 151, 167, 1) 0%,
		rgba(208, 221, 226, 1) 100%
	);

	@media screen and (min-width: 700px) {
		padding: 40px;
	}
`;

const MainSection = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 700px) {
		justify-content: space-between;
		flex-direction: row;
	}
`;

const Content = styled.div`
	max-width: 400px;
	padding-right: 20px;

	@media screen and (min-width: 700px) {
		max-width: 400px;
	}

	@media screen and (min-width: 900px) {
		max-width: 500px;
	}

	@media screen and (min-width: 1100px) {
		max-width: 680px;
	}
`;

const Title = styled.h2`
	font-size: 1.2rem;
	font-weight: 600;
	text-align: center;
	margin-top: 0;

	@media screen and (min-width: 700px) {
		text-align: left;
	}

	@media screen and (min-width: 1100px) {
		font-size: 1.44rem;
	}
`;

const Body = styled.p`
	line-height: 1;
	font-size: 0.8rem;
	margin-bottom: 15px;

	@media screen and (min-width: 700px) {
		margin-bottom: 0;
	}

	@media screen and (min-width: 1100px) {
		font-size: 1rem;
	}
`;

const VideoWrapper = styled.div`
	max-width: 560px;
	overflow: hidden;
	position: relative;
	width: 100%;

	&::after {
		padding-top: 56.25%;
		display: block;
		content: '';
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export default Landing;
