import './breeds.scss';
import BreedCard from '../BreedCard';
import { useDogContext } from '../../contexts/dogContext';
import { DogType } from '../../types/dogTypes';

const BreedsSection = () => {
	const { dogs } = useDogContext();
	return (
		<section className='breeds'>
			<h3 className='breeds__title'>Dog Breeds</h3>
			<div className='breeds__cards'>
				{dogs.map((dog: DogType) => (
					<BreedCard name={dog.name} imgLink={dog.imgLink} />
				))}
			</div>
		</section>
	);
};

export default BreedsSection;
