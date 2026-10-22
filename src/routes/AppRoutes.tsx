import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import DashboardPage from '../components/ui/Dashboard/DashboardPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
