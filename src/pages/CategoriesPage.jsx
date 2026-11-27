import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section';
import { featuredCollections, filterOptions } from '../data/products';
import './AuxPages.css';

function CategoriesPage() {
  useEffect(() => {
    document.title = 'Digital Store | Categorias';
  }, []);

  return (
    <Layout>
      <div className="container aux-page">
        <h1 className="aux-page-heading">Categorias</h1>

        <Section title="Coleções em destaque" titleAlign="left">
          <div className="aux-collections-grid">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/products?filter=${encodeURIComponent(collection.filter)}`}
                className="aux-collection-card"
              >
                <img src={collection.image} alt={collection.title} />
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Explorar por estilo" titleAlign="left">
          <div className="aux-chips-grid">
            {filterOptions.categories.map((cat) => (
              <Link
                key={cat.value}
                to={`/products?filter=${encodeURIComponent(cat.value)}`}
                className="aux-category-tile"
              >
                <span>{cat.text}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Marcas" titleAlign="left">
          <div className="aux-chips-grid">
            {filterOptions.brands.map((brand) => (
              <Link
                key={brand.value}
                to={`/products?filter=${encodeURIComponent(brand.value)}`}
                className="aux-category-tile"
              >
                <span>{brand.text}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export default CategoriesPage;
