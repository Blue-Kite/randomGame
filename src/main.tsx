import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Fonts from './theme/Font';
import theme from './theme/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<Fonts />
		<App />
	</ChakraProvider>,
);
