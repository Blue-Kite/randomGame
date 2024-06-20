import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import MainTitle from '../../components/MainTitle';
import Card from './components/Card';

const FirstRandom = () => {
	const [count, setCount] = React.useState('');
	const [loserNum, setLoserNum] = React.useState(0);

	React.useEffect(() => {
		// TODO: count가 숫자가 아닐 수도 있는 경우 방지 06.20
		setLoserNum(Math.floor(Math.random() * Number(count)));
	}, [count]);

	const Items = Array.from({ length: parseInt(count, 10) || 0 }, (_, index) => (
		<GridItem key={index}>
			<Card isLoser={loserNum === index} />
		</GridItem>
	));

	return (
		<Flex direction="column" padding="10px" gap="30px">
			<MainTitle title="첫 번째 게임" setCount={setCount} />
			<Flex flexDirection="column" width="100%">
				<Grid templateColumns="repeat(4, 1fr)" columnGap="30px" rowGap="70px">
					{Items}
				</Grid>
			</Flex>
		</Flex>
	);
};
export default FirstRandom;
