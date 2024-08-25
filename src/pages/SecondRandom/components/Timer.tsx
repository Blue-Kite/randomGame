import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { formatTime } from '@utils/formatTime';
import React from 'react';

type TimerProps = {
	buttonDisabled: boolean;
	setTimes: React.Dispatch<React.SetStateAction<number[]>>;
};

const Timer = ({ setTimes, buttonDisabled }: TimerProps) => {
	const [isRunning, setIsRunning] = React.useState(false);
	const [second, setSecond] = React.useState(0);
	const timerRef = React.useRef<NodeJS.Timeout | null>(null);

	const handleStartStop = () => {
		if (!isRunning) {
			timerRef.current = setInterval(() => {
				setSecond((prev) => prev + 1);
			}, 1000);
		} else if (timerRef.current !== null) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
		setIsRunning((prev) => !prev);
	};

	const handleSaveReset = () => {
		if (isRunning) {
			setTimes((prev: number[]) => [...prev, second]);
			setSecond(0);
			if (timerRef.current !== null) {
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
		} else {
			setTimes([]);
			setIsRunning((prev) => !prev);
		}
		setIsRunning((prev) => !prev);
	};

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
				<Button onClick={handleStartStop} isDisabled={buttonDisabled}>
					{isRunning ? '중지' : '실행'}
				</Button>
				<Button onClick={handleSaveReset}>{isRunning ? '저장' : '리셋'}</Button>
			</Flex>
		</Flex>
	);
};

export default Timer;
