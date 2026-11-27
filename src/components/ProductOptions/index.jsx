import { useState } from 'react';
import './styles.css';

function ProductOptions({
  title,
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  value,
  onChange,
}) {
  const [internalSelected, setInternalSelected] = useState(options[0] ?? null);
  const selectedValue = value !== undefined ? value : internalSelected;

  function handleSelect(option) {
    if (value === undefined) {
      setInternalSelected(option);
    }
    if (onChange) {
      onChange(option);
    }
  }

  return (
    <div className="product-options">
      {title && <p className="product-options-title">{title}</p>}

      <div className="product-options-list">
        {options.map((option, index) => {
          const isSelected = selectedValue === option;
          const isCircle = shape === 'circle';
          const isColor = type === 'color';

          const itemStyle = {
            borderRadius: isCircle ? '50%' : radius,
          };

          if (isColor && !isCircle) {
            itemStyle.backgroundColor = option;
          }

          return (
            <button
              key={`${option}-${index}`}
              type="button"
              className={`product-option-item product-option-item--${shape} product-option-item--${type} ${
                isSelected ? 'selected' : ''
              }`}
              style={itemStyle}
              onClick={() => handleSelect(option)}
              aria-pressed={isSelected}
              aria-label={isColor ? `Cor ${option}` : `Opção ${option}`}
            >
              {isColor && isCircle ? (
                <span
                  className="product-option-swatch"
                  style={{ backgroundColor: option }}
                />
              ) : isColor ? null : (
                <span>{option}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProductOptions;
