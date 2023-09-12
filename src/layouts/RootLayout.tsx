import { Outlet } from 'react-router';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='container main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
