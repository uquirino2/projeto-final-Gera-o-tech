import { Link } from 'react-router-dom';
import Logo from '../Logo';
import FooterInfo from './FooterInfo';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './styles.css';

const infoLinks = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/careers' },
  { text: 'Meus Pedidos', link: '/meus-pedidos' },
];

const categoryLinks = [
  { text: 'Camisetas', link: '/products?filter=Camisetas' },
  { text: 'Calças', link: '/products?filter=Calças' },
  { text: 'Bonés', link: '/products?filter=Bonés' },
  { text: 'Headphones', link: '/products?filter=Headphones' },
  { text: 'Tênis', link: '/products?filter=Tênis' },
];

const contactLinks = [
  {
    text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
    link: '',
  },
  {
    text: '(85) 3051-3411',
    link: 'tel:+558530513411',
  },
];

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="Digital Store">
              <Logo variant="footer" />
            </Link>

            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="footer-columns">
            <FooterInfo title="Informação" informations={infoLinks} />
            <FooterInfo title="Categorias" informations={categoryLinks} />
            <FooterInfo title="Contato" informations={contactLinks} />
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">© {CURRENT_YEAR} Digital Store</p>
      </div>
    </footer>
  );
}

export default Footer;
