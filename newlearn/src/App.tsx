import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import ScrapPage from './pages/ScrapPage/index.tsx';
import ProfilPage from './pages/ProfilePage/index.tsx';
import LoginPage from './pages/LoginPage/index.tsx';
import ProtectedRoute from './pages/OauthPage/index.tsx';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/details/:newsId" element={<NewsDetailPage />} />
            <Route
              path="/scrap"
              element={
                <ProtectedRoute>
                  <ScrapPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
