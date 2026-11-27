import { Link } from 'react-router-dom';
import './styles.css';

function Section({ title, titleAlign = 'left', link, children, className = '' }) {
  const isExternal = link?.href?.startsWith('http');

  return (
    <section className={`page-section ${className}`.trim()}>
      {(title || link) && (
        <div
          className={`section-header ${
            titleAlign === 'center' ? 'section-header--center' : ''
          }`}
        >
          {title && <h2 className="section-title">{title}</h2>}

          {link &&
            (isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="section-link"
              >
                <span>{link.text}</span>
                <span aria-hidden="true">→</span>
              </a>
            ) : (
              <Link to={link.href} className="section-link">
                <span>{link.text}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
        </div>
      )}

      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
