import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Lnb from './Lnb';
import Gnb from './Gnb';

const Layout = () => (
	<Flex width="100vw" flexDirection="column">
		<Gnb />
		<Flex flexDirection={{ base: 'column', md: 'row' }}>
			<Lnb />
			<Box
				width={{ base: '100%', md: 'calc(100vw - 120px)' }}
				paddingBottom="30px"
			>
				<Outlet />
			</Box>
		</Flex>
	</Flex>
);
export default Layout;
