import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(8px)' }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <Logo />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
