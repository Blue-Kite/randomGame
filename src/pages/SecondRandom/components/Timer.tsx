import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Timer = () => {
	const [isRunning, setIsRunning] = React.useState(false);
	const [second, setSecond] = React.useState(0);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	React.useEffect(() => {
		let interval: number | undefined;
		if (isRunning) {
			interval = window.setInterval(() => {
				setSecond((prev) => prev + 1);
			}, 10);
		} else if (interval) clearInterval(interval);
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isRunning]);

	return (
		<Flex flexDirection="column">
			<Text fontFamily="subHeading">{second}</Text>
			<Flex flexDirection="row" justifyContent="center" gap="30px">
				<Button onClick={handleStart}>{isRunning ? '중지' : '실행'}</Button>
				<Button onClick={handleStop}>{isRunning ? '저장' : '리셋'}</Button>
			</Flex>
		</Flex>
	);
};

export default Timer;
