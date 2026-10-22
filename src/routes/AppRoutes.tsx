import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import DashboardPage from '../components/ui/Dashboard/DashboardPage';
import AdminLayout from '../layouts/AdminLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
