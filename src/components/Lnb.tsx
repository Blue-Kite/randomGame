import { Flex, Link } from '@chakra-ui/react';

const Lnb = () => (
	<Flex flexDirection="column">
		<Link href="/">첫 번째 게임</Link>
		<Link href="/second">두 번째 게임</Link>
	</Flex>
);
export default Lnb;
