import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import DashboardPage from '../components/dashboard/DashboardPage';
import AdminLayout from '../components/layouts/AdminLayout';
import LogHarvest from '../components/log/LogHarvest';
import LogExpenses from '../components/log/LogExpenses';
import LogSales from '../components/log/LogSales';
import LogHomePage from '../components/log/LogHomePage';
import LogHistoryHomePage from '../components/log/LogHistoryHomePage';
import LogHistoryHarvest from '../components/log/LogHistoryHarvest';
import LogHistorySales from '../components/log/LogHistorySales';
import LogHistoryExpenses from '../components/log/LogHistoryExpenses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index path="dashboard" element={<DashboardPage />} />
        <Route path="log-history" element={<LogHistoryHomePage />} />
        <Route path="log-history/harvest" element={<LogHistoryHarvest />} />
        <Route path="log-history/sales" element={<LogHistorySales />} />
        <Route path="log-history/expenses" element={<LogHistoryExpenses />} />
      </Route>
      <Route path="/log-harvest" element={<LogHarvest />} />
      <Route path="/log-expenses" element={<LogExpenses />} />
      <Route path="/log-sales" element={<LogSales />} />
      <Route path="/log-homepage" element={<LogHomePage />} />
    </Routes>
  );
};

export default AppRoutes;
