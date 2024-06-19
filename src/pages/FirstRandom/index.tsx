import { Flex } from '@chakra-ui/react';
import React from 'react';
import MainTitle from '../../components/MainTitle';

const FirstRandom = () => {
	const [count, setCount] = React.useState('');
	return (
		<Flex padding="10px" gap="">
			<MainTitle title="첫 번째 게임" count={count} setCount={setCount} />
		</Flex>
	);
};
export default FirstRandom;
