import './App.css';
import CategoryLayout from './components/categories/categoryLayout';

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className=" w-100px h-100px bg-black"></div>
        <CategoryLayout />
      </div>
    </>
  );
}

export default App;
