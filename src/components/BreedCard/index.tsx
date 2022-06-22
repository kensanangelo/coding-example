import './breedCard.scss';

interface Props {
	name: string;
	imgLink: string;
}

const BreedCard = ({ name, imgLink }: Props) => {
	return (
		<div className='breed-card'>
			<img className='breed-card__img' src={imgLink} />
			<h3 className='breed-card__name'>{name}</h3>
		</div>
	);
};

export default BreedCard;
