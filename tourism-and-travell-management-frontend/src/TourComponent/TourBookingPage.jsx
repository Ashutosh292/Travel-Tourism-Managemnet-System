import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import creditcard from "../images/credit-card.png";
import TourCarousel from "./TourCarousel";

const TourBookingPage = () => {
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

  const navigate = useNavigate();
  const location = useLocation();
  const [tour, setTour] = useState(location.state);

  const [bookingAmount, setBookingAmount] = useState("0.0");

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  const [paymentRequest, setPaymentRequest] = useState({
    tourId: tour.id,
    customerId: customer.id,
    cardNo: "",
    nameOnCard: "",
    noOfTickets: "",
    cvv: "",
    expiryDate: "",
  });

  const handleUserInput = (e) => {
    setPaymentRequest({
      ...paymentRequest,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setBookingAmount(paymentRequest.noOfTickets * tour.ticketPrice);
  }, [paymentRequest.noOfTickets]);

  const payAndConfirmBooking = (e) => {
    fetch("http://localhost:8080/api/tour/booking/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentRequest),
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/home");
            }, 2000); // Redirect after 3 seconds
          } else {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    e.preventDefault();
  };

  return (
    <div className="mb-3">
      <div className="col ml-5 mt-3 ms-5 me-5">
        {/* Company and Employer Details Card */}
        <div className="card rounded-card h-100 shadow-lg ">
          <h2 className="card-title text-center text-color ms-4">
            Tour Detail
          </h2>
          <div className="row g-0">
            {/* Left side - Company Details Card */}
            <div className="col-md-6">
              <div className="card-body">
                <div className="row g-0">
                  {/* Left side - Company Logo */}
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <TourCarousel
                      item={{
                        image1: tour.image1,
                        image2: tour.image2,
                        image3: tour.image3,
                      }}
                    />
                  </div>
                  {/* Right side - Job Details */}
                  <div className="col-md-8">
                    <div className="card-body text-color">
                      <h3 className="card-title d-flex justify-content-between text-color-second">
                        <div>
                          <b>{tour.name}</b>
                        </div>
                      </h3>
                      <p className="card-text text-dark">{tour.description}</p>
                      <br />
                      <b className="card-text">
                        <div className="col-md-4 d-flex justify-content-between">
                          <div>
                            <span className="text-dark">From:</span>
                            <span className="text-color ms-2">
                              {tour.fromLocation.name + " "}
                            </span>
                          </div>
                          <div className="ms-5">
                            <span className="text-dark"> To:</span>
                            <span className="text-color ms-2">
                              {tour.toLocation.name + " "}
                            </span>
                          </div>
                        </div>
                      </b>
                      <br />
                      <b>
                        <span className="text-dark">Tour Guide:</span>
                        <span className="text-color ms-2">
                          {tour.guide.firstName + " " + tour.guide.lastName}
                        </span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Employer Details Card */}
            <div className="col-md-6 text-dark">
              <div className="card-body">
                {/* Include the necessary details for the employer */}
                {/* Display First Name and Last Name in a row */}
                <div className="row mt-5">
                  <div className="col-md-6">
                    <p className="mb-2">
                      <b>Tour Start:</b>

                      <span className="text-color">
                        {" "}
                        {formatDateFromEpoch(tour.startDate)}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-2">
                      <b>Tour End:</b>
                      <span className="text-color">
                        {" "}
                        {formatDateFromEpoch(tour.endDate)}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <p className="mb-2">
                      <b>Total Tour Day:</b>

                      <span className="text-color">
                        {" "}
                        {tour.totalDaysOfTour}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-6">
                      <p className="mb-2">
                        <b>Transport:</b>

                        <span className="text-color">
                          {" "}
                          {tour.transport.name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <p className="mb-2">
                      <b>Vehicle Registration No:</b>
                      <span className="text-color">
                        {" "}
                        {tour.vehicleRegistrationNo}
                      </span>
                    </p>
                  </div>

                  <div className="col-md-6">
                    <p className="mb-2">
                      <b>Hotel Name:</b>

                      <span className="text-color"> {tour.lodgingName}</span>
                    </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <p className="mb-2">
                      <b>Hotel Type:</b>
                      <span className="text-color"> {tour.lodging.type}</span>
                    </p>
                  </div>

                  <div className="col-md-6">
                    <p
                      className="mb-2"
                      style={{
                        fontSize: "1.3em",
                      }}
                    >
                      <b>
                        Ticket Price:{" "}
                        <span className="text-color">
                          &#8377; {tour.ticketPrice}
                        </span>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ************************************** */}
          <hr />
          <div className="h-100 mt-4">
            <div className="text-color-second text-center">
              <h4> Book Tour From here!!!</h4>

              <div className="row mt-4">
                <div class="col-sm-1 mt-2"></div>
                <div class="col-sm-4 mt-2">
                  <img
                    src={creditcard}
                    className="card-img-top rounded img-fluid"
                    alt="img"
                    style={{
                      maxWidth: "300px",
                    }}
                  />
                </div>
                <div class="col-sm-4 mt-2">
                  <form className="row g-3" onSubmit={payAndConfirmBooking}>
                    <div className="text-color">
                      <input
                        type="number"
                        className="form-control"
                        id="noOfTickets"
                        name="noOfTickets"
                        onChange={handleUserInput}
                        value={paymentRequest.noOfTickets}
                        placeholder="No. of Tickets..."
                        required
                      />
                    </div>
                    <div className="text-color">
                      <input
                        type="text"
                        className="form-control"
                        id="nameOnCard"
                        name="nameOnCard"
                        onChange={handleUserInput}
                        value={paymentRequest.nameOnCard}
                        placeholder="Name on Card..."
                        required
                      />
                    </div>
                    <div className="mb-3 text-color">
                      <input
                        type="number"
                        className="form-control"
                        id="cardNo"
                        name="cardNo"
                        onChange={handleUserInput}
                        value={paymentRequest.cardNo}
                        placeholder="Enter Card Number here..."
                        required
                      />
                    </div>

                    <div className="col text-color">
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        name="expiryDate"
                        onChange={handleUserInput}
                        value={paymentRequest.expiryDate}
                        placeholder="Valid Through"
                        required
                      />
                    </div>

                    <div className="col text-color">
                      <input
                        type="number"
                        className="form-control"
                        id="cvv"
                        name="cvv"
                        onChange={handleUserInput}
                        value={paymentRequest.cvv}
                        placeholder="CVV"
                        required
                      />
                    </div>

                    <input
                      type="submit"
                      className="btn bg-color custom-bg-text ms-2"
                      value={`Pay ₹ ${bookingAmount}`}
                    />
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingPage;
