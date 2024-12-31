import './App.css';
import HomePage from './pages/HomePage.tsx';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex-col p-4">
        <div className="w-100px h-100px bg-black"></div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
