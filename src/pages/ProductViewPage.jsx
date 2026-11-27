import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { products } from '../data/products';
import './ProductViewPage.css';

function ProductViewPage() {
  const { id } = useParams();
  const product =
    products.find((item) => String(item.id) === String(id)) || products[0];

  const recommendedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `Digital Store | ${product.name}`;
  }, [product]);

  return (
    <Layout>
      <div className="container product-view-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Produtos</Link>
          <span>/</span>
          <Link to={`/products?filter=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>
          <span>/</span>
          <Link to={`/products?filter=${encodeURIComponent(product.brand)}`}>
            {product.brand}
          </Link>
          <span>/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-view-main">
          <div className="product-view-gallery">
            <Gallery
              key={product.id}
              images={product.images}
              showThumbs
              width="700"
              height="570"
              radius="4px"
            />
          </div>

          <div className="product-view-buybox">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <ProductOptions
                key={`size-${product.id}`}
                title="Tamanho"
                options={product.sizes}
                radius="4px"
                shape="square"
                type="text"
              />
              <ProductOptions
                key={`color-${product.id}`}
                title="Cor"
                options={product.colors}
                shape="circle"
                type="color"
              />
            </BuyBox>
          </div>
        </div>

        <div className="product-view-recommended">
          <Section
            title="Produtos recomendados"
            titleAlign="left"
            link={{ text: 'Ver todos', href: '/products' }}
          >
            <ProductListing products={recommendedProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductViewPage;
