import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route index element={<div>메인입니다</div>} />
		</Routes>
	);
}

export default App;
