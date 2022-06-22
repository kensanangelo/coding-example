import './breedCard.scss';
import { useState } from 'react';
import clsx from 'clsx';

interface Props {
	name: string;
	imgLink: string;
}

const BreedCard = ({ name, imgLink }: Props) => {
	const [loading, setLoading] = useState(true);

	return (
		<article className='breed-card'>
			{loading ? <div className='breed-card__placeholder'></div> : null}
			<img
				className={clsx(
					'breed-card__img',
					loading && 'breed-card__img--hidden'
				)}
				height='200px'
				src={imgLink}
				alt={`A ${name} breed of dog`}
				onLoad={() => setLoading(false)}
			/>
			<h3 className='breed-card__name'>{name}</h3>
		</article>
	);
};

export default BreedCard;
