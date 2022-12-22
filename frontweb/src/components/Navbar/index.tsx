import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link ,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
         <Link to="/" >
          <h1>Carros Top</h1>
        </Link>  
        
        <button  //menu hamburguer
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcars-navbar"
          aria-controls="topcars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="topcars-navbar">
           <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
             <li>
              <NavLink to="/cars" activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li> 
          </ul> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
