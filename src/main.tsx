import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from './theme/Font';
import theme from './theme/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<Fonts />
		<App />
	</ChakraProvider>,
);
