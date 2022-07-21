import { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
	name: string;
	imgLink: string;
}

const BreedCard = ({ name, imgLink }: Props) => {
	const [loading, setLoading] = useState(true);

	return (
		<Card>
			{loading ? <Placeholder></Placeholder> : null}
			<Image
				$isLoading={loading}
				height='200px'
				src={imgLink}
				alt={`A ${name} breed of dog`}
				onLoad={() => setLoading(false)}
			/>
			<Name>{name}</Name>
		</Card>
	);
};

interface ImageProps {
	$isLoading: boolean;
}

const Image = styled.img`
	position: relative;
	height: 200px;
	width: 100%;
	object-fit: cover;
	transition: transform 0.5s;
	z-index: -1;

	${({ $isLoading }: ImageProps) =>
		$isLoading
			? css`
					display: none;
			  `
			: ''}
`;

const Card = styled.article`
	position: relative;
	z-index: 1;
	max-width: 310px;
	width: 100%;
	box-shadow: 0px 0px 15px -6px #b9b9b9;
	border-radius: 3px 3px 12px 12px;
	overflow: hidden;

	@media screen and (min-width: 650px) {
		max-width: none;
		width: auto;
	}

	&:hover ${Image} {
		transform: scale(1.06);
	}
`;

const Placeholder = styled.div`
	height: 200px;
	width: 100%;
	background-color: lightgray;

	@media screen and (min-width: 700px) {
		width: 200px;
	}
`;

const Name = styled.h3`
	height: 60px;
	padding: 40px 10px;
	margin: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	color: #333;
	background-color: #fff;
`;

export default BreedCard;
