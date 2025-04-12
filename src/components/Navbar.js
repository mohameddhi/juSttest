import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <Link href="/" style={styles.navbarLogo}>
          HOME
        </Link>
        <ul style={styles.navMenu}>
          <li style={styles.navItem}>
            <Link href="/page" style={styles.navLinks}>
              ACCOUNT
            </Link>
          </li>
          
          <li style={styles.navItem}>
            <Link href="/blog" style={styles.navLinks}>
              LOGOUT
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/contact" style={styles.navLinks}>
              CONTACT
            </Link>
          </li>
        </ul>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

// Styles CSS intégrés dans le même fichier
const styles = {
  navbar: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarLogo: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'white',
  },
  navMenu: {
    listStyle: 'none',
    display: 'flex',
    margin: '0',
    padding: '0',
  },
  navItem: {
    marginLeft: '20px',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: 'red',
    },
  },
  navLinks: {
    textDecoration: 'none',
    color: '#e785a3',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    ':hover': {
      color: 'white',
    },
  },
  searchContainer: {
    display: 'flex',
  },
  searchInput: {
    padding: '5px',
    marginRight: '5px',
    borderRadius: '20px', // Ajout d'un border-radius arrondi
    border: '1px solid #ccc', // Ajout d'une bordure pour mieux voir l'effet
    outline: 'none', // Supprime la bordure par défaut au focus
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '20px', // Ajout d'un border-radius arrondi pour correspondre
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Transition pour un effet fluide
    ':hover': {
      backgroundColor: '#777', // Changement de couleur au survol
    },
  },
};

export default Navbar;



