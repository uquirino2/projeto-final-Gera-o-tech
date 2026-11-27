import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import './styles.css';

function ProductCard({
  id,
  image,
  imagem,
  name,
  category,
  price,
  priceDiscount,
}) {
  const imgSrc = image || imagem;
  const hasDiscount =
    typeof priceDiscount === 'number' && priceDiscount < price;
  const discountPercent = hasDiscount
    ? Math.round(((price - priceDiscount) / price) * 100)
    : 0;

  const content = (
    <article className="product-card">
      <div className="product-card-media">
        {hasDiscount && (
          <span className="product-discount-badge">{discountPercent}% OFF</span>
        )}
        <img src={imgSrc} alt={name} />
      </div>

      <div className="product-card-info">
        {category && <span className="product-card-category">{category}</span>}
        <h3 className="product-card-name">{name}</h3>

        <div className="product-card-prices">
          {hasDiscount ? (
            <>
              <span className="product-price-old">{formatPrice(price)}</span>
              <span className="product-price-current">
                {formatPrice(priceDiscount)}
              </span>
            </>
          ) : (
            <span className="product-price-current">{formatPrice(price)}</span>
          )}
        </div>
      </div>
    </article>
  );

  if (id !== undefined && id !== null) {
    return (
      <Link to={`/product/${id}`} className="product-card-link">
        {content}
      </Link>
    );
  }

  return content;
}

export default ProductCard;
