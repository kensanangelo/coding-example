import './breeds.scss';
import BreedCard from '../BreedCard';
import { useDogContext } from '../../contexts/dogContext';
import { DogType } from '../../types/dogTypes';
import Alert from '../Alert';

const BreedsSection = () => {
	const { dogs, fetchingState } = useDogContext();

	return (
		<section className='breeds'>
			<h3 className='breeds__title'>Dog Breeds</h3>
			{fetchingState === 'failed' ? (
				<Alert state='error' />
			) : fetchingState === 'fetching' ? (
				<Alert state='fetching' />
			) : (
				<div className='breeds__cards'>
					{dogs.map((dog: DogType, index: number) => (
						<BreedCard
							key={index}
							name={dog.name}
							imgLink={dog.imgLink}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default BreedsSection;
