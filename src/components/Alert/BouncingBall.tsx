import styled from 'styled-components';

const BouncingBall = styled.span`
	display: block;
	margin-left: 5px;
	background-color: red;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	animation: ballAnim 1.3s ease 0s infinite alternate both;

	@keyframes ballAnim {
		0% {
			animation-timing-function: ease-in;
			opacity: 1;
			transform: translateY(-18px);
		}

		24% {
			opacity: 1;
		}

		40% {
			animation-timing-function: ease-in;
			transform: translateY(-10px);
		}

		65% {
			animation-timing-function: ease-in;
			transform: translateY(-4px);
		}

		82% {
			animation-timing-function: ease-in;
			transform: translateY(-2px);
		}

		93% {
			animation-timing-function: ease-in;
			transform: translateY(-1px);
		}

		25%,
		55%,
		75%,
		87% {
			animation-timing-function: ease-out;
			transform: translateY(0px);
		}

		100% {
			animation-timing-function: ease-out;
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;

export default BouncingBall;
