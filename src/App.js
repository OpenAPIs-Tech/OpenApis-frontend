import  Nav  from './components/Nav/Nav';
import  Main  from './components/Main/Main';
import NavProvider from './context/NavContext';


function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
	);
}

export default App;