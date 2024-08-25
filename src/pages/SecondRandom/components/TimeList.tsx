import { Box, Flex, Text } from '@chakra-ui/react';

type TimerListProps = {
	times: number[];
};

const TimerList = ({ times }: TimerListProps) => (
	<Flex flexDirection="column" alignItems="center">
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			width="200px"
			border="1px solid green"
		>
			{times.map((time, idx) => (
				<Text key={time} fontFamily="subHeading">{`${idx}번: ${time}`}</Text>
			))}
		</Box>
	</Flex>
);

export default TimerList;
