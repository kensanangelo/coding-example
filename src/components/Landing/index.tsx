import './landing.scss';
import Header from '../Header';

const Landing = () => {
	return (
		<div className='landing'>
			<Header />
			<section className='landing__main'>
				<div className='landing__content'>
					<h2 className='landing__header'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h2>
					<p className='landing__body'>
						Donect mauris nisl, consectetur viverra leo vitae, gravida
						iaculis ipsum. Aenean soldales volutpat congue. In eget
						feugiat dolor. Quisque gravida odio tortor, a sollicitudin
						quam dignissim ac. Nulla quis purus dictum, imperdiet est eu,
						pulvinar leo.
					</p>
				</div>
				<div className='landing__video'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/s_uiya1WsQ0'
						title='DOGS FREE STOCK VIDEOS WITH DOGS  NO COPYRIGHT VIDEOS'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			</section>
		</div>
	);
};

export default Landing;
