
import  Main  from './components/Main/Main';
import { Route, Routes } from "react-router-dom";
import Documentation from "./components/Documentation/Documentation";


function App() {
	return (
		<div className='appContainer'>
		<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/documentation/:api" element={<Documentation/>} />
        </Routes>
			
		</div>
	);
}

export default App;