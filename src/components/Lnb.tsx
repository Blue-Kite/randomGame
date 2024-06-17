import { Box, Flex, Link } from '@chakra-ui/react';

const Lnb = () => (
	<Flex
		flexDirection={{ base: 'row', md: 'column' }}
		width={{ base: '100%', md: '180px' }}
		height={{ base: '50px', md: '100%' }}
		background="lightgray"
		alignItems="center"
		justifyContent={{ base: 'center', md: 'normal' }}
		gap={{ base: '20px', md: '0px' }}
	>
		<Box display="flex" flexDirection="column" justifyContent="center">
			<Link href="/">첫 번째 게임</Link>
		</Box>
		<Box display="flex" flexDirection="column" justifyContent="center">
			<Link href="/second">두 번째 게임</Link>
		</Box>
	</Flex>
);
export default Lnb;
