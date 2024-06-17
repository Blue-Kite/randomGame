import { Flex, FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';

const Gnb = () => (
	<Flex
		width="100%"
		height="80px"
		flexDirection="row"
		justifyContent="space-between"
		alignItems="center"
		padding="0px 30px"
		background="green"
	>
		<Text color="yellow">오리 게임</Text>
		<FormControl display="flex" width="fit-content" alignItems="center">
			<FormLabel htmlFor="darkmode-change" mb="0">
				다크모드 설정
			</FormLabel>
			<Switch id="darkmode-change" />
		</FormControl>
	</Flex>
);
export default Gnb;
