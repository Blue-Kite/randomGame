import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { formatTime } from '@utils/formatTime';
import React from 'react';

const Timer = () => {
	const [isRunning, setIsRunning] = React.useState(false);
	const [second, setSecond] = React.useState(0);
	const timer = React.useRef(0);

	const handleStartStop = () => {
		if (isRunning) {
			timer.current = window.setInterval(() => {
				setSecond((prev) => prev + 1);
			}, 1000);
		}
		setIsRunning((prev) => !prev);
	};

	const handleReset = () => {};

	/* React.useEffect(() => {
		if (isRunning) {
			timer.current = window.setInterval(() => {
				setSecond((prev) => prev + 1);
			}, 1000);
		} else {
			clearInterval(timer.current);
		}
		return () => {
			clearInterval(timer.current);
		};
	}, [isRunning]); */

	return (
		<Flex flexDirection="column" alignItems="center" gap="50px">
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				width="200px"
				height="100px"
				border="1px solid green"
			>
				<Text fontFamily="subHeading">{formatTime(second)}</Text>
			</Box>
			<Flex flexDirection="row" justifyContent="center" gap="30px">
				<Button onClick={handleStartStop}>{isRunning ? '중지' : '실행'}</Button>
				<Button onClick={handleReset}>{isRunning ? '저장' : '리셋'}</Button>
			</Flex>
		</Flex>
	);
};

export default Timer;
