import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChakraProvider>,
);
