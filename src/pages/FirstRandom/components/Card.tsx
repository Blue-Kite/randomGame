import { Box } from '@chakra-ui/react';

type CardProps = {
	isLoser: boolean;
};
const Card = ({ isLoser }: CardProps) => (
	<Box width="100%" height="200px" background={isLoser ? 'red' : 'green'} />
);

export default Card;
