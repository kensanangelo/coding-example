import './alert.scss';
import clsx from 'clsx';

interface Props {
	state: 'fetching' | 'error';
}

const Alert = ({ state = 'error' }: Props) => {
	return (
		<aside
			className={clsx('alert', state === 'fetching' && 'alert--fetching')}
		>
			<p className='alert__text'>
				{state === 'fetching'
					? 'Fetching dogs...'
					: 'Something went wrong. Please refresh to try again.'}
				{state === 'fetching' ? (
					<span className='alert__bouncing-ball'></span>
				) : null}
			</p>
		</aside>
	);
};

export default Alert;
