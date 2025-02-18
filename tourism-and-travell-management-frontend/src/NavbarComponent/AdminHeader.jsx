import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("Logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <>
      <style>
        {`
          /* General styles */
          .nav-item {
            position: relative;
          }

          .text-color {
            color: #333;
            transition: color 0.3s ease;
          }

          .text-color:hover {
            color: #007bff; /* Change text color on hover */
          }

          /* Dropdown menu styling */
          .navbar-nav .nav-item .dropdown-menu {
            display: none;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease, visibility 0s 0.2s;
          }

          .nav-item:hover .dropdown-menu {
            display: block;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.3s ease;
          }

          .nav-item:hover .dropdown-toggle {
            color: #007bff; /* Highlight dropdown link when hovering over the item */
          }

          .nav-item .dropdown-menu .nav-link {
            padding: 10px 15px;
            transition: background-color 0.3s ease;
          }

          .nav-item .dropdown-menu .nav-link:hover {
            background-color: #f1f1f1; /* Light background color on hover */
            color: #007bff; /* Text color change on hover */
          }

          /* Add some spacing between the items */
          .nav-item + .nav-item {
            margin-left: 15px;
          }

          /* Hover effect for logout */
          .nav-item a:hover {
            background-color: #ff6347; /* Tomato color for logout */
            color: white;
            border-radius: 4px;
          }

          .navbar-nav .nav-item .nav-link {
            padding: 10px 15px;
            font-weight: 500;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }

          .navbar-nav .nav-item .nav-link:hover {
            background-color: #f8f9fa;
          }

          .navbar-nav .nav-item.active .nav-link {
            color: #007bff;
          }

          .navbar-nav .nav-item .nav-link.active {
            font-weight: bold;
          }
        `}
      </style>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-color"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b> Location</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/admin/location/add" className="nav-link active">
                <b className="text-color">Add Location</b>
              </Link>
            </li>
            <li>
              <Link to="/admin/location/all" className="nav-link active">
                <b className="text-color">View Locations</b>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-color"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b> Tour Guide</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/user/tour-guide/register" className="nav-link active">
                <b className="text-color">Add Tour Guide</b>
              </Link>
            </li>
            <li>
              <Link to="/admin/tour-guide/all" className="nav-link active">
                <b className="text-color">View Tour Guides</b>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-color"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b> Transport</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/admin/transport/add" className="nav-link active">
                <b className="text-color">Add Transport</b>
              </Link>
            </li>
            <li>
              <Link to="/admin/transport/all" className="nav-link active">
                <b className="text-color">View Transports</b>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-color"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b> Hotels</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/admin/lodge/add" className="nav-link active">
                <b className="text-color">Add Hotels</b>
              </Link>
            </li>
            <li>
              <Link to="/admin/lodge/all" className="nav-link active">
                <b className="text-color">View Hotels</b>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/admin/tour/booking/all" className="nav-link active">
            <b className="text-color">Tour Bookings</b>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-color"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b> User</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/admin/customer/all" className="nav-link active">
                <b className="text-color">View Customers</b>
              </Link>
            </li>
            <li>
              <Link to="/user/admin/register" className="nav-link active">
                <b className="text-color">Register Admin</b>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="" className="nav-link active" onClick={adminLogout}>
            <b className="text-color">Logout</b>
          </Link>
          <ToastContainer />
        </li>
      </ul>
    </>
  );
};

export default AdminHeader;
