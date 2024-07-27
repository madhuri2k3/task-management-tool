import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTasks, faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${styles.navbarBrand}`} href="/">
            <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} href="/tasks">
                  <FontAwesomeIcon icon={faTasks} className={styles.icon} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} href="/Signup">
                  <FontAwesomeIcon icon={faUserPlus} className={styles.icon} /> Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} href="/Login">
                  <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

