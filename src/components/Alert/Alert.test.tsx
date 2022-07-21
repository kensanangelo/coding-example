import { render } from '@testing-library/react';
import Alert from './index';

describe('Alert', () => {
	test('Basic error rendering', () => {
		const component = render(<Alert />);

		const { getByText } = component;
		const textEl = getByText(
			'Something went wrong. Please refresh to try again.'
		);
		expect(textEl).toBeInTheDocument();
	});

	test('Basic fetching rendering', () => {
		const component = render(<Alert state='fetching' />);

		const { getByText } = component;
		const textEl = getByText('Fetching dogs...');
		expect(textEl).toBeInTheDocument();
	});
});
