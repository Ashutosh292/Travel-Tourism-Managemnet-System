import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.png";

const Header = () => {
  // Define inline styles as JavaScript objects
  const headerStyles = {
    backgroundColor: '#ffffff', // Light background color
    padding: '15px 30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // subtle shadow for a floating effect
  };

  const brandStyles = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.4rem',
    color: '#333333', // Dark text for better contrast
    textDecoration: 'none',
  };

  const brandHoverStyles = {
    color: '#f8b400',
    textDecoration: 'none',
  };

  const navLinkStyles = {
    color: '#333333', // Dark color for text
    padding: '10px 20px',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease', // smooth transition on hover
  };

  const navLinkHoverStyles = {
    backgroundColor: '#f8b400',
    color: '#ffffff', // Change text color to white on hover for better contrast
  };

  const navbarTogglerStyles = {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#333333', // Dark button color for better contrast
  };

  const navbarTogglerIconStyles = {
    backgroundColor: '#f8b400', // Button icon color
  };

  return (
    <div>
      <nav style={headerStyles} className="navbar navbar-expand-lg text-color">
        <div className="container-fluid text-color">
          <img
            src={logo}
            height="60"
            width="auto"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <Link to="/" style={brandStyles} className="navbar-brand">
            <i>
              <b style={{ color: '#f8b400' }} className="ms-2">ExploreXpert</b>
            </i>
          </Link>

          <button
            style={navbarTogglerStyles}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span style={navbarTogglerIconStyles} className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <RoleNav />
          </div>
        </div>
      </nav>

      {/* Mobile-responsive Styles */}
      <style>
        {`
          .navbar-nav .nav-link {
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          /* Hover effect for navigation links */
          .navbar-nav .nav-link:hover {
            background-color: #f8b400;
            color: #ffffff;
            border-radius: 4px; /* Rounded corners on hover */
          }

          .navbar-brand:hover {
            color: #f8b400; /* Hover color for brand */
            text-decoration: none; /* Remove underline on hover */
          }

          /* Navbar styles */
          @media (max-width: 992px) {
            .navbar {
              padding: 10px 20px;
            }
            .navbar-brand {
              font-size: 1.2rem;
            }
            .navbar-toggler-icon {
              background-color: #f8b400;
            }
          }

          @media (max-width: 576px) {
            .navbar-brand {
              font-size: 1rem;
            }
            .navbar-nav {
              width: 100%;
              text-align: center;
              margin-top: 10px;
            }
            .nav-link {
              font-size: 0.9rem;
              padding: 8px 10px;
            }
            .navbar-toggler-icon {
              background-color: #f8b400;
            }
          }

          /* Dropdown menu styling */
          .navbar-nav .dropdown-menu {
            transition: opacity 0.3s ease, visibility 0.3s ease;
            visibility: hidden;
            opacity: 0;
          }

          .navbar-nav .nav-item:hover .dropdown-menu {
            visibility: visible;
            opacity: 1;
          }

          .dropdown-menu .nav-link {
            padding: 10px 15px;
            transition: background-color 0.3s ease;
          }

          .dropdown-menu .nav-link:hover {
            background-color: #f8b400;
            color: #ffffff;
          }

        `}
      </style>
    </div>
  );
};

export default Header;
