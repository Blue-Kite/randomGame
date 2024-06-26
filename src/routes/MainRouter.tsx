import Layout from '@components/Layout';
import FirstRandom from '@pages/FirstRandom';
import SecondRandom from '@pages/SecondRandom';
import { createBrowserRouter } from 'react-router-dom';

const MainRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <FirstRandom />,
			},
			{
				path: '/second',
				element: <SecondRandom />,
			},
		],
	},
]);

export default MainRouter;
