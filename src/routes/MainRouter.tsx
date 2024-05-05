import { createBrowserRouter } from 'react-router-dom';
import FirstRandom from '../pages/FirstRandom';
import SecondRandom from '../pages/SecondRandom';

const MainRouter = createBrowserRouter([
	{
		path: '/',
		element: <FirstRandom />,
	},
	{
		path: 'second',
		element: <SecondRandom />,
	},
]);

export default MainRouter;
