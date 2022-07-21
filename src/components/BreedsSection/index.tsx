import styled from 'styled-components';
import { useDogContext } from '../../contexts/dogContext';
import { DogType } from '../../types/dogTypes';
import BreedCard from '../BreedCard';
import Alert from '../Alert';

const BreedsSection = () => {
	const { dogs, fetchingState } = useDogContext();

	return (
		<Container>
			<Title>Dog Breeds</Title>
			{fetchingState === 'failed' ? (
				<Alert state='error' />
			) : fetchingState === 'fetching' ? (
				<Alert state='fetching' />
			) : (
				<Cards>
					{dogs.map((dog: DogType, index: number) => (
						<BreedCard
							key={index}
							name={dog.name}
							imgLink={dog.imgLink}
						/>
					))}
				</Cards>
			)}
		</Container>
	);
};

const Container = styled.section`
	margin: 15px 60px 200px;
`;

const Title = styled.h3`
	text-align: center;
	margin-bottom: 30px;
	font-size: 1.6rem;
	font-weight: normal;
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	flex-direction: column;
	align-items: center;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 650px) {
		flex-flow: row wrap;
	}
`;

export default BreedsSection;
