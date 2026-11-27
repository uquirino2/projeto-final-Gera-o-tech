import { Link } from 'react-router-dom';

function FooterInfo({ title, informations = [] }) {
  return (
    <div className="footer-info-col">
      <h3 className="footer-info-title">{title}</h3>
      <ul className="footer-info-list">
        {informations.map((item, index) => (
          <li key={`${item.text}-${index}`}>
            {item.link ? (
              item.link.startsWith('http') || item.link.startsWith('tel:') ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              ) : (
                <Link to={item.link}>{item.text}</Link>
              )
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterInfo;
