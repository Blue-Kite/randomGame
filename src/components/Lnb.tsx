import { Box, Flex, Link, Text } from '@chakra-ui/react';

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
		<Box
			display="flex"
			flexDirection="column"
			height={{ base: '50px', md: '100px' }}
			justifyContent="center"
		>
			<Link href="/">
				<Text fontFamily="subHeading" color="black">
					첫 번째 게임
				</Text>
			</Link>
		</Box>
		<Box
			display="flex"
			height={{ base: '50px', md: '100px' }}
			flexDirection="column"
			justifyContent="center"
		>
			<Link href="/second">
				<Text fontFamily="subHeading" color="black">
					두 번째 게임
				</Text>
			</Link>
		</Box>
	</Flex>
);
export default Lnb;
