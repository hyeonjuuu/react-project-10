import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
