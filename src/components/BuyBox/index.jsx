import { useState } from 'react';
import starIcon from '../../assets/star-icon.svg';
import { formatPrice } from '../../utils/formatPrice';
import './styles.css';

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
}) {
  const [added, setAdded] = useState(false);
  const hasDiscount =
    typeof priceDiscount === 'number' && priceDiscount < price;

  function handleBuyClick() {
    setAdded(true);
    if (onBuy) {
      onBuy();
    }
    setTimeout(() => setAdded(false), 2400);
  }

  return (
    <div className="buybox">
      <h1 className="buybox-name">{name}</h1>
      {reference && <p className="buybox-reference">{reference}</p>}

      <div className="buybox-rating-row">
        <span className="buybox-stars">
          <span>{stars}</span>
          <img src={starIcon} alt="" className="buybox-star-icon" />
        </span>

        {rating !== undefined && (
          <span className="buybox-rating">({rating} avaliações)</span>
        )}
      </div>

      <div className="buybox-prices">
        {hasDiscount ? (
          <>
            <span className="buybox-price-main">
              {formatPrice(priceDiscount)}
            </span>
            <span className="buybox-price-original">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="buybox-price-main">{formatPrice(price)}</span>
        )}
      </div>

      {description && (
        <div className="buybox-description-block">
          <h2 className="buybox-description-label">Descrição do produto</h2>
          <p className="buybox-description">{description}</p>
        </div>
      )}

      {children && <div className="buybox-options">{children}</div>}

      <div className="buybox-actions">
        <button
          id="buybox-cta-button"
          type="button"
          className="buybox-cta"
          onClick={handleBuyClick}
        >
          {added ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
        </button>
      </div>
    </div>
  );
}

export default BuyBox;
