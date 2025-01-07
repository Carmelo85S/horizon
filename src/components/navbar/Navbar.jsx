import { Link } from 'react-router-dom';
import '../../style/navbar/navbar.css';

const Navbar = () => {
  return (
    <section className="nav-wrapper">
      <nav className="nav-container">
        <h2 className="logo">Horizon</h2>
        <ul className="link-container"> 
            <li className="link-list"><Link className="link" to="/">About</Link></li>
            <li className="link-list"><Link className="link" to="/">Who we are</Link></li>
            <li className="link-list"><Link className="link" to="/">Our destination</Link></li>
            <li className="link-list"><Link className="link" to="/">Contact</Link></li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
