import { Flex } from '@chakra-ui/react';
import React from 'react';
import MainTitle from '../../components/MainTitle';

const SecondRandom = () => {
	const [count, setCount] = React.useState('');
	return (
		<Flex padding="10px" gap="">
			<MainTitle title="두 번째 게임" count={count} setCount={setCount} />
		</Flex>
	);
};

export default SecondRandom;
