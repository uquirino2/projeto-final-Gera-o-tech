import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import miniCartIcon from '../../assets/mini-cart.svg';
import './styles.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    const trimmed = searchTerm.trim();

    if (trimmed) {
      navigate(`/products?filter=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/products');
    }

    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-top">
          <button
            type="button"
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link to="/" className="header-logo-link" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <form className="header-search" onSubmit={handleSearch} role="search">
            <input
              id="header-search-input"
              type="text"
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button" aria-label="Buscar produtos">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7.5"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <div className="header-actions">
            <div className="auth-links">
              <Link to="/cadastro" className="register-link">
                Cadastre-se
              </Link>
              <Link to="/login" className="login-btn">
                Entrar
              </Link>
            </div>

            <div className="cart-wrapper" title="Carrinho de compras">
              <img src={miniCartIcon} alt="Carrinho de compras" width={24} height={24} />
              <span className="cart-badge">2</span>
            </div>
          </div>
        </div>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Navegação principal">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMenuOpen(false)}
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMenuOpen(false)}
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meus-pedidos"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMenuOpen(false)}
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>

          <div className="mobile-auth">
            <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
              Entrar
            </Link>
            <Link to="/cadastro" className="register-link" onClick={() => setMenuOpen(false)}>
              Cadastre-se
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
