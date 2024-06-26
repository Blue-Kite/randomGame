import { Flex } from '@chakra-ui/react';
import MainTitle from '@components/MainTitle';
import React from 'react';
import Timer from './components/Timer';

const SecondRandom = () => {
	const [count, setCount] = React.useState('');
	const [end] = React.useState(0);

	return (
		<Flex direction="column" padding="10px" gap="30px">
			<MainTitle title="두 번째 게임" setCount={setCount} />
			{count !== '' && Number(count) !== end && (
				<Flex flexDirection="column" width="100%">
					<Timer />
				</Flex>
			)}
		</Flex>
	);
};

export default SecondRandom;
