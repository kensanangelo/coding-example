import { render } from '@testing-library/react';
import BreedsSection from './index';
import { DogContext } from '../../contexts/dogContext';
import { testDog, testDog2, alertStateMessages } from '../../tests/mockData';

describe('BreedsSection', () => {
	test('Basic rendering', async () => {
		const component = render(
			<DogContext.Provider
				value={{ dogs: [testDog, testDog2], fetchingState: 'success' }}
			>
				<BreedsSection />
			</DogContext.Provider>
		);

		const { getByText, findByAltText } = component;

		const titleEl = getByText('Dog Breeds');
		expect(titleEl).toBeInTheDocument();

		const dogNameEl = getByText(testDog.name);
		const dogImgEl = await findByAltText(testDog.alt);
		expect(dogNameEl).toBeInTheDocument();
		expect(dogImgEl).toBeInTheDocument();
		expect(dogImgEl).toHaveAttribute('src', testDog.imgLink);

		const dogName2El = getByText(testDog2.name);
		const dogImg2El = await findByAltText(testDog2.alt);
		expect(dogName2El).toBeInTheDocument();
		expect(dogImg2El).toBeInTheDocument();
		expect(dogImg2El).toHaveAttribute('src', testDog2.imgLink);
	});

	test('Loading state', async () => {
		const component = render(
			<DogContext.Provider
				value={{ dogs: [testDog, testDog2], fetchingState: 'fetching' }}
			>
				<BreedsSection />
			</DogContext.Provider>
		);

		const { getByText } = component;

		const alertEl = getByText(alertStateMessages.fetching);
		expect(alertEl).toBeInTheDocument();
	});

	test('Error state', async () => {
		const component = render(
			<DogContext.Provider
				value={{ dogs: [testDog, testDog2], fetchingState: 'failed' }}
			>
				<BreedsSection />
			</DogContext.Provider>
		);

		const { getByText } = component;

		const alertEl = getByText(alertStateMessages.error);
		expect(alertEl).toBeInTheDocument();
	});
});
