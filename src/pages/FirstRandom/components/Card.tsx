import { Box } from '@chakra-ui/react';
import React from 'react';

type CardProps = {
	isLoser: boolean;
};

const Card = ({ isLoser }: CardProps) => {
	const [isFront, setIsFront] = React.useState(true);

	const handleFlip = () => {
		setIsFront(!isFront);
	};

	let background;
	if (isFront) background = 'green';
	else if (isLoser) background = 'red';
	else background = 'blue';

	return (
		<Box
			onClick={handleFlip}
			width="100%"
			height="200px"
			background={background}
			borderRadius="10px"
			transition="0.3s"
			transform={`perspective(800px) ${background === 'green' ? 'rotateY(0deg)' : 'rotateY(180deg)'}`}
		/>
	);
};

export default Card;
