import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { featuredCollections, homeSlides, products } from '../data/products';
import './HomePage.css';

const quickCategories = [
  {
    label: 'Camisetas',
    href: '/products?filter=Camisetas',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4L9 3C9.6 4.2 10.7 5 12 5C13.3 5 14.4 4.2 15 3L18 4L21 8L18.5 10L17 9V20H7V9L5.5 10L3 8L6 4Z" />
      </svg>
    ),
  },
  {
    label: 'Calças',
    href: '/products?filter=Calças',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3H17L18 21H14L12 11L10 21H6L7 3Z" />
        <path d="M7 7H17" />
      </svg>
    ),
  },
  {
    label: 'Bonés',
    href: '/products?filter=Bonés',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14C4 9.5 7.2 6 11.5 6C15.8 6 19 9.5 19 14H4Z" />
        <path d="M19 14H22C22 15.6 20.5 16.5 18.5 16.5H4V14" />
      </svg>
    ),
  },
  {
    label: 'Headphones',
    href: '/products?filter=Headphones',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14V12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12V14" />
        <rect x="3" y="13" width="4" height="7" rx="2" />
        <rect x="17" y="13" width="4" height="7" rx="2" />
      </svg>
    ),
  },
  {
    label: 'Tênis',
    href: '/products?filter=Tênis',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16.5C3 17.6 3.9 18.5 5 18.5H19.5C20.6 18.5 21.5 17.6 21.5 16.5C21.5 15.1 20.4 14 19 13.8L15.5 13.2L12.5 9C11.4 10.2 9.4 10.3 8 9.2L5.2 12.2C3.8 13.2 3 14.8 3 16.5Z" />
        <path d="M3.5 16.2H21" />
      </svg>
    ),
  },
];

function HomePage() {
  useEffect(() => {
    document.title = 'Digital Store | Home';
  }, []);

  const featuredProducts = products.slice(0, 8);

  return (
    <Layout>
      <div className="home-hero">
        <Gallery images={homeSlides} width="1440" height="681" />
      </div>

      <div className="container home-sections">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections-grid">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/products?filter=${encodeURIComponent(collection.filter)}`}
                className="collection-card"
              >
                <img src={collection.image} alt={collection.title} />
              </Link>
            ))}
          </div>

          <div className="category-shortcuts" aria-label="Categorias em destaque">
            {quickCategories.map((item) => (
              <Link key={item.label} to={item.href} className="category-shortcut">
                <span className="category-shortcut-circle">{item.icon}</span>
                <span className="category-shortcut-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={featuredProducts} />
        </Section>
      </div>

      <section className="special-offer">
        <div className="container special-offer-inner">
          <div className="special-offer-media">
            <div className="special-offer-halo" />
            <img
              src="/produc-image-1.jpeg"
              alt="Air Jordan edição de colecionador"
            />
          </div>

          <div className="special-offer-content">
            <span className="special-offer-eyebrow">Oferta especial</span>
            <h1 className="special-offer-title">
              Air Jordan edição de colecionador
            </h1>
            <p className="special-offer-text">
              Design icônico com acabamento premium em couro e detalhes exclusivos
              para quem busca conforto e estilo em qualquer ocasião.
            </p>
            <Link to="/product/2" className="special-offer-btn">
              Ver Oferta
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
