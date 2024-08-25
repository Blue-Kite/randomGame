import { Flex } from '@chakra-ui/react';
import MainTitle from '@components/MainTitle';
import React from 'react';
import Timer from './components/Timer';
import TimerList from './components/TimeList';

const SecondRandom = () => {
	const [count, setCount] = React.useState('');
	const [times, setTimes] = React.useState<number[]>([]);

	const buttonDisabled = times.length >= Number(count);

	return (
		<Flex direction="column" padding="10px" gap="30px">
			<MainTitle title="두 번째 게임" setCount={setCount} />
			{count !== '' && (
				<Flex flexDirection="column" width="100%" gap="30px">
					<Timer setTimes={setTimes} buttonDisabled={buttonDisabled} />
					{times.length > 0 && <TimerList times={times} />}
				</Flex>
			)}
		</Flex>
	);
};

export default SecondRandom;
