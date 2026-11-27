import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';
import './styles.css';

function Logo({ variant = 'header' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader;

  return (
    <img
      src={src}
      alt="Digital Store"
      width={253}
      height={44}
      className="logo-img"
    />
  );
}

export default Logo;
