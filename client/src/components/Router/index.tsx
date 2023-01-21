import { LoginPage } from '@/pages/LoginPage';
import { HomePage } from '@/pages/HomePage';
import { Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<LoginPage />} />
    </Routes>
  );
};
