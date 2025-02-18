import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import { useNavigate } from "react-router-dom";
import TourCard from "../TourComponent/TourCard";
import ClipLoader from "react-spinners/ClipLoader"; // Add a loading spinner

const HomePage = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [tours, setTours] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventFromLocationId, setEventFromLocationId] = useState("");
  const [eventToLocationId, setEventToLocationId] = useState("");
  const [tempEventName, setTempEventName] = useState("");
  const [tempEventFromLocationId, setTempEventFromLocationId] = useState("");
  const [tempEventToLocationId, setTempEventToLocationId] = useState("");
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const retrieveAllLocations = async () => {
    const response = await axios.get("http://localhost:8080/api/location/fetch/all");
    return response.data;
  };

  useEffect(() => {
    const getAllEvents = async () => {
      setIsLoading(true);
      const allEvents = await retrieveAllEvents();
      if (allEvents) {
        setTours(allEvents.tours);
      }
      setIsLoading(false);
    };

    const getSearchedEvents = async () => {
      setIsLoading(true);
      const allEvents = await searchEvents();
      if (allEvents) {
        setTours(allEvents.tours);
      }
      setIsLoading(false);
    };

    const getAllLocations = async () => {
      setIsLoading(true);
      const resLocation = await retrieveAllLocations();
      if (resLocation) {
        setLocations(resLocation.locations);
      }
      setIsLoading(false);
    };

    if (eventFromLocationId !== "" || eventToLocationId !== "" || eventName !== "") {
      getSearchedEvents();
    } else {
      getAllEvents();
    }

    getAllLocations();
  }, [eventFromLocationId, eventToLocationId, eventName]);

  const retrieveAllEvents = async () => {
    const response = await axios.get("http://localhost:8080/api/tour/fetch/all/active");
    return response.data;
  };

  const searchEvents = async () => {
    if (eventName !== "") {
      const response = await axios.get(
        "http://localhost:8080/api/tour/fetch/name-wise?tourName=" + eventName
      );
      return response.data;
    } else if (eventFromLocationId !== "" || eventFromLocationId !== "0" || eventToLocationId !== "" || eventToLocationId !== "0") {
      const response = await axios.get(
        "http://localhost:8080/api/tour/fetch/location-wise?fromLocationId=" +
          eventFromLocationId +
          "&toLocationId=" +
          eventToLocationId
      );
      return response.data;
    }
  };

  const searchEventByName = (e) => {
    e.preventDefault();
    setEventName(tempEventName);
    setTempEventName("");
    setEventFromLocationId("");
    setEventToLocationId("");
  };

  const searchEventByCategory = (e) => {
    e.preventDefault();
    setEventFromLocationId(tempEventFromLocationId);
    setEventToLocationId(tempEventToLocationId);
    setTempEventFromLocationId("");
    setTempEventToLocationId("");
    setEventName("");
  };

  return (
    <div className="container-fluid mb-2">
      <Carousel />
      <h5 className="text-color-second text-center mt-3">
        Search Tours here..!!
      </h5>

      <div className="d-flex aligns-items-center justify-content-center">
        <div className="row">
          <div className="col-auto">
            <div className="mt-3">
              <form className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="eventName"
                    onChange={(e) => setTempEventName(e.target.value)}
                    value={tempEventName}
                    placeholder="Search Tour here..."
                  />
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn bg-color custom-bg-text mb-3"
                    onClick={searchEventByName}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="mt-3">
              <form className="row g-3">
                <div className="col-auto">
                  <select
                    name="tempEventFromLocationId"
                    onChange={(e) => setTempEventFromLocationId(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">From Tour Location</option>
                    {locations.map((location) => {
                      return (
                        <option value={location.id}>{location.name}</option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-auto">
                  <select
                    name="tempEventToLocationId"
                    onChange={(e) => setTempEventToLocationId(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">To Tour Location</option>
                    {locations.map((location) => {
                      return (
                        <option value={location.id}>{location.name}</option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn bg-color custom-bg-text mb-3"
                    onClick={searchEventByCategory}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <ClipLoader size={50} color={"#e67e22"} />
        </div>
      ) : (
        <div className="col-md-12 mt-3 mb-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {tours.map((tour) => {
              return <TourCard item={tour} key={tour.id} />;
            })}
          </div>
        </div>
      )}

      <hr />
      <Footer />

      {/* Inline CSS Style */}
      <style jsx>{`
        /* Apply font to the body */
        body {
          font-family: Arial, Helvetica, sans-serif; /* Fallback to built-in fonts */
          background-color: #f9f9f9;
          color: #333;
          padding-top: 20px;
        }

        /* Add custom styles for the container */
        .container-fluid {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Carousel Styling */
        .carousel {
          border-radius: 10px;
          overflow: hidden;
        }

        /* Heading Style */
        h5.text-color-second {
          font-size: 24px;
          color: #2c3e50;
          font-weight: 500;
          letter-spacing: 1px;
        }

        /* Form styling */
        input.form-control, select.form-control {
          border-radius: 8px;
          border: 1px solid #ccc;
          padding: 10px;
          font-size: 14px;
        }

        /* Button styling */
        button.bg-color.custom-bg-text {
          background-color: #e67e22;
          color: #fff;
          border-radius: 8px;
          padding: 10px 20px;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        /* Button hover effect */
        button.bg-color.custom-bg-text:hover {
          background-color: #d35400;
          cursor: pointer;
        }

        /* Card Styling */
        .card {
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .card img {
          width: 100%;
          border-bottom: 5px solid #f9f9f9;
        }

        /* Footer */
        footer {
          margin-top: 40px;
          text-align: center;
          padding: 20px;
          background-color: #2c3e50;
          color: #fff;
        }

        footer a {
          color: #fff;
          text-decoration: none;
        }

        footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
