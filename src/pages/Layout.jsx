import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
