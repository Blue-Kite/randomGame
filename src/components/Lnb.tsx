import { Box, Flex, Link } from '@chakra-ui/react';

const Lnb = () => (
	<Flex
		flexDirection="column"
		width="180px"
		height="calc(100vh - 80px)"
		background="lightgray"
		alignItems="center"
	>
		<Box
			height="100px"
			display="flex"
			flexDirection="column"
			justifyContent="center"
		>
			<Link href="/">첫 번째 게임</Link>
		</Box>
		<Box
			height="100px"
			display="flex"
			flexDirection="column"
			justifyContent="center"
		>
			<Link href="/second">두 번째 게임</Link>
		</Box>
	</Flex>
);
export default Lnb;
