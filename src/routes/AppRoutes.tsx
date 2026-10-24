import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import DashboardPage from '../components/ui/Dashboard/DashboardPage';
import AdminLayout from '../components/layouts/AdminLayout';
import LogHarvest from '../components/log/LogHarvest';
import LogExpenses from '../components/log/LogExpenses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index path="dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="/log-harvest" element={<LogHarvest />} />
      <Route path="log-expenses" element={<LogExpenses />} />
    </Routes>
  );
};

export default AppRoutes;
