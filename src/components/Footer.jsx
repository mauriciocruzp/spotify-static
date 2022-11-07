import '../assets/css/footer.css';

function Footer() {
  return (
    <footer>
      <ul className='footer-list'>
        <li className='head'>COMPANY</li>
        <li>About</li>
        <li>Jobs</li>
        <li>For the Record</li>
      </ul>
      <ul className='footer-list'>
        <li className="head">COMMUNITIES</li>
        <li>For Artists</li>
        <li>Developers</li>
        <li>Brands</li>
        <li>Investors</li>
        <li>Vendors</li>
      </ul>
      <ul className="footer-list">
        <li className="head">USEFULL LINKS</li>
        <li>Help</li>
        <li>Web Player</li>
        <li>Free Mobile App</li>
      </ul>
    </footer>
  );
}

export default Footer;