import { render } from '@testing-library/react';
import Landing from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Landing', () => {
	test('Basic rendering', async () => {
		const component = render(
			<MemoryRouter>
				<Landing />
			</MemoryRouter>
		);

		const { getByText, getByTestId } = component;

		const titleEl = getByText(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		);
		expect(titleEl).toBeInTheDocument();

		const bodyEl = getByText(
			'Donect mauris nisl, consectetur viverra leo vitae, gravida iaculis ipsum. Aenean soldales volutpat congue. In eget feugiat dolor. Quisque gravida odio tortor, a sollicitudin quam dignissim ac. Nulla quis purus dictum, imperdiet est eu, pulvinar leo.'
		);
		expect(bodyEl).toBeInTheDocument();

		const iframeEl = getByTestId('youtube-iframe');
		expect(iframeEl).toBeInTheDocument();
	});
});
