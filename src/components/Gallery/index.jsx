import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './styles.css';

function parseDimension(value) {
  if (!value) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return /^\d+$/.test(String(value).trim()) ? `${value}px` : value;
}

function parseNumeric(value) {
  if (!value) return null;
  const num = parseFloat(String(value));
  return Number.isNaN(num) ? null : num;
}

function Gallery({
  className = '',
  width,
  height,
  radius = '0px',
  showThumbs = false,
  images = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const safeIndex = Math.min(currentIndex, images.length - 1);
  const isFirst = safeIndex === 0;
  const isLast = safeIndex === images.length - 1;

  const numW = parseNumeric(width);
  const numH = parseNumeric(height);

  const stageStyle = {
    maxWidth: parseDimension(width),
    borderRadius: radius,
    aspectRatio: numW && numH ? `${numW} / ${numH}` : undefined,
    maxHeight: parseDimension(height),
  };

  function handlePrev() {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  return (
    <div
      className={`gallery ${className}`.trim()}
      style={{ maxWidth: parseDimension(width) }}
    >
      <div className="gallery-stage" style={stageStyle}>
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${safeIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <div className="gallery-slide" key={`${item.src}-${index}`}>
              <img
                src={item.src}
                alt={item.alt || `Slide ${index + 1}`}
                style={{ borderRadius: radius }}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow gallery-arrow--left"
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery-arrow gallery-arrow--right"
          onClick={handleNext}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>

        {!showThumbs && images.length > 1 && (
          <div className="gallery-dots" role="tablist" aria-label="Slides">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`gallery-dot ${index === safeIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((item, index) => (
            <button
              key={`${item.src}-thumb-${index}`}
              type="button"
              className={`gallery-thumb ${index === safeIndex ? 'selected' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver miniatura ${index + 1}`}
            >
              <img
                src={item.src}
                alt={item.alt || `Miniatura ${index + 1}`}
                style={{ borderRadius: radius }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
