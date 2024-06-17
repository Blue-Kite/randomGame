import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Lnb from './Lnb';
import Gnb from './Gnb';

const Layout = () => (
	<Flex width="100vw" height="100vh" flexDirection="column">
		<Gnb />
		<Flex flexDirection="row">
			<Lnb />
			<Box width="calc(100vw - 180px)">
				<Outlet />
			</Box>
		</Flex>
	</Flex>
);
export default Layout;
