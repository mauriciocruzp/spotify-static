import SpofityLogo from '../assets/images/spotify-logo.svg';
import '../assets/css/header.css';

function Header() {
  return (
    <>
      <header className='header'>
        <img src={SpofityLogo} alt='' className='logo' />
      </header>
    </>
  );
}

export default Header;