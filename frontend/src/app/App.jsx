import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { TripsPage } from '@/pages/trips';
import { CheckoutPage } from '@/pages/checkout';
import { PromotionsPage } from '@/pages/promotions';
import { ContactPage } from '@/pages/contact';
import { ForgotPasswordPage } from '@/pages/forgot-password';
import { ProfilePage } from '@/pages/profile';
import { ResetPasswordPage } from '@/pages/reset-password';
import { MainLayout } from '@/app/layouts';

export const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chuyen-xe" element={<TripsPage />} />
          <Route path="/khuyen-mai" element={<PromotionsPage />} />
          <Route path="/khuyen-mai/:promoId" element={<PromotionsPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/quen-mat-khau" element={<ForgotPasswordPage />} />
          <Route path="/dat-lai-mat-khau" element={<ResetPasswordPage />} />
          <Route path="/ca-nhan" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
