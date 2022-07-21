import { render } from '@testing-library/react';
import BreedCard from './index';
import { testDog } from '../../tests/mockData';

describe('BreedCard', () => {
	test('Basic rendering', async () => {
		const component = render(
			<BreedCard name={testDog.name} imgLink={testDog.imgLink} />
		);

		const { getByText, findByAltText } = component;
		const titleEl = getByText(testDog.name);
		const imgEl = await findByAltText(testDog.alt);
		expect(titleEl).toBeInTheDocument();
		expect(imgEl).toBeInTheDocument();
		expect(imgEl).toHaveAttribute('src', testDog.imgLink);
	});
});
