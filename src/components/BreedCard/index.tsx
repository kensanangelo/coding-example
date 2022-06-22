import './breedCard.scss';

interface Props {
	name: string;
	imgLink: string;
}

const BreedCard = ({ name, imgLink }: Props) => {
	return (
		<article className='breed-card'>
			<img
				className='breed-card__img'
				src={imgLink}
				alt={`A photo of a ${name}`}
			/>
			<h3 className='breed-card__name'>{name}</h3>
		</article>
	);
};

export default BreedCard;
