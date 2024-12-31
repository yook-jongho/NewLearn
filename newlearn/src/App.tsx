import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage.tsx';
import NewsDetailPage from './pages/NewsDetailPage.tsx/index.tsx';
import ScrapPage from './pages/ScrapPage/index.tsx';
import ProfilPage from './pages/ProfilePage/index.tsx';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<NewsDetailPage />} />
            <Route path="/scrap" element={<ScrapPage />} />
            <Route path="/profile" element={<ProfilPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
