import './App.css';
import { RouterProvider } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

const App = () => <RouterProvider router={MainRouter} />;

export default App;
