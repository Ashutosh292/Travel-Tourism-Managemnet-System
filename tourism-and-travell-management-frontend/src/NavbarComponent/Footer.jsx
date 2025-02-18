import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start">
          <div className="container-fluid p-4 pb-0">
            <section>
              <div className="row footer-columns">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase custom-bg-text">
                    Tourism Management System
                  </h5>
                  <p className="footer-text">
                    Welcome to our ExploreXpert website, where every
                    detail meets perfection. Let's turn your Dream into an
                    unforgettable experience!
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-second">About us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="footer-link">
                        Link 1
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-second">Contact us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="footer-link">
                        Link 1
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-second">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="footer-link">
                        Link 1
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 custom-bg-text">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded custom-btn"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>

          <div className="text-center">
            © 2023 Copyright:
            <a className="footer-link" href="#">ExploreXpert.com</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* General link styles */
        .footer-link {
          color: #f8b400;
          text-decoration: none;
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }

        /* Hover effects for links */
        .footer-link:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* Button styles with transition */
        .custom-btn {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
        }

        .custom-btn:hover {
          background-color: #f8b400;
          border-color: #f8b400;
          transform: scale(1.05); /* Slight zoom effect for button */
        }

        /* Footer background and content styling */
        footer {
          background-color: #222222;
          color: #fff;
          padding: 30px 0;
        }

        .custom-bg-text {
          color: #f8b400;
        }

        .footer-text {
          font-size: 1rem;
          color: #000;
        }

        .text-color-second {
          color: #ccc;
        }

        footer .row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        footer .col-md-6 {
          margin-bottom: 20px;
        }

        footer .text-center {
          color: #f8b400;
          font-weight: bold;
        }

        footer .text-center a {
          color: #fff;
          text-decoration: none;
        }

        /* For responsiveness */
        @media (max-width: 768px) {
          footer .row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
