import BouncingBall from './BouncingBall';
import styled, { css } from 'styled-components';

interface Props {
	state: 'fetching' | 'error';
}

const Alert = ({ state = 'error' }: Props) => {
	return (
		<Container $isFetching={state === 'fetching'}>
			<Text>
				{state === 'fetching'
					? 'Fetching dogs...'
					: 'Something went wrong. Please refresh to try again.'}
				{state === 'fetching' ? <BouncingBall /> : null}
			</Text>
		</Container>
	);
};

interface ContainerProps {
	$isFetching: boolean;
}

const Container = styled.aside`
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
	background-color: #ffefefef;
	border: 1px solid red;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 15px -6px #b9b9b9;
	border-radius: 10px;

	${(props: ContainerProps) =>
		props.$isFetching
			? css`
					background-color: #fff;
					border: 1px solid #9999ff;
			  `
			: ``}
`;

const Text = styled.p`
	margin: 0;
	display: flex;
	align-items: center;
`;

export default Alert;
