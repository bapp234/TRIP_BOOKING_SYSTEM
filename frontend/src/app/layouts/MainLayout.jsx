import { HeaderWidget } from '@/widgets/header';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Global header (positioned absolutely inside) */}
      <HeaderWidget />

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
