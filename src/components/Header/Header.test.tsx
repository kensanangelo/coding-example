import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
	test('Basic rendering', async () => {
		const component = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);

		const { getByText } = component;

		const titleEl = getByText('Dog App');
		expect(titleEl).toBeInTheDocument();

		const link1El = getByText('Home');
		expect(link1El).toBeInTheDocument();

		const link2El = getByText('About');
		expect(link2El).toBeInTheDocument();

		const link3El = getByText('Contact');
		expect(link3El).toBeInTheDocument();
	});
});
