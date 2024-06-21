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
		/>
	);
};

export default Card;
