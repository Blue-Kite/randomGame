import { Box, Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Lnb from './Lnb';

const Layout = () => (
	<Container border="1px solid green">
		<Flex flexDirection="row" border="1px solid blue">
			<Lnb />
			<Box width="100%" overflow="auto" border="1px solid red">
				<Outlet />
			</Box>
		</Flex>
	</Container>
);
export default Layout;
