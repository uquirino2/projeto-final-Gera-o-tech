import ProductCard from '../ProductCard';
import './styles.css';

function ProductListing({ products = [], columns = 4 }) {
  return (
    <div className={`product-listing product-listing--cols-${columns}`}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? `${product.name}-${index}`}
          id={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;
