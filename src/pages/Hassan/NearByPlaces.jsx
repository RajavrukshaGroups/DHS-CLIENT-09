import { Card, Col, Row } from "react-bootstrap";
import {
  FaRoad,
  FaHospital,
  FaBuilding,
  FaGlobe,
  FaSchool,
  FaUniversity,
  FaLeaf,
  FaHotel,
  FaCity,
  FaCheckCircle,
} from "react-icons/fa";
import './NearByPlaces.css'

const NearByPlaces = () => {
  return (
    <div>
      <Card className="property-card shadow-sm">
        <Card.Body>
          <div className="project-intro">

            <Row>
              {/* LEFT COLUMN */}
              <Col md={6} className=" text-center flex flex-col justify-center items-center ">
                <h2 className="intro-subtitle">Prime Location</h2>
                <div className="intro-divider mt-4"></div>

                <ul className="feature-list text-center flex flex-col justify-center ">
                  <li className="feature-item  text-start items-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Located on Hassan–Belur Main Road in Hassan.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Just 500 meters from the Outer Ring Road.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Only 3 km from the Hassan Ring Road.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Close to Euro Pandithya School and Brigade College.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Near Hoysala Village Resort and lifestyle destinations.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Peaceful residential environment with excellent connectivity.</span>
                  </li>

                  <li className="feature-item text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span >Located in a developing area with strong growth potential.</span>
                  </li>
                </ul>
              </Col>

              {/* RIGHT COLUMN */}
              <Col md={6} className=" lg:mt-8 md:mt-6 text-center flex flex-col justify-center items-center">
                <h2 className="intro-subtitle">Future-Ready Infrastructure</h2>
                <div className="intro-divider mt-4"></div>

                <ul className="feature-list  text-start">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>Located in the fast-developing region of Hassan.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Direct access to Hassan–Belur Main Road.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Easy connectivity to Outer Ring Road and Ring Road.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Close to Euro Pandithya School and Brigade College.</span>
                  </li>

                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>Near Government Primary Health Center.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Accessible to Dharmasthala Ayurvedic Centre.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Close to Hoysala Village Resort and Heritage Club.</span>
                  </li>

                  <li className="feature-item  text-start">
                    <FaCheckCircle className="feature-icon" />
                    <span>Ideal location for modern living and long-term investment.</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* DESCRIPTION */}
          <div className="card-title">
            <p className="center-text">
              Defence Habitat Hassan is designed to provide excellent connectivity
            </p>

            <p className="exclusive-text center-text">
              Located on the Hassan–Belur Main Road with easy access to the Outer
              Ring Road, Defence Habitat offers excellent connectivity across
              Hassan and nearby Belur. Surrounded by schools, healthcare centers,
              and leisure destinations, the area is rapidly developing, making it
              a promising location for both comfortable living and long-term
              investment.
            </p>
          </div>

          <div className="title-divider"></div>
          <div className="title-divider"></div>

          {/* NEARBY PLACES */}
          <Row>
            <Col md={6}>
              <ul className="icon-list">

                <li>
                  <FaRoad className="icon" />
                  <span>Located on Hassan – Belur Main Road.</span>
                </li>

                <li>
                  <FaGlobe className="icon" />
                  <span>Just 500 meters from Outer Ring Road.</span>
                </li>

                <li>
                  <FaRoad className="icon" />
                  <span>Only 3 km from Hassan Ring Road.</span>
                </li>

                <li>
                  <FaSchool className="icon" />
                  <span>Close to Euro Pandithya School (5 km).</span>
                </li>

                <li>
                  <FaUniversity className="icon" />
                  <span>Near Brigade PU College (3.3 km).</span>
                </li>

              </ul>
            </Col>

            <Col md={6}>
              <ul className="icon-list">

                <li>
                  <FaHospital className="icon" />
                  <span>1 km from Government Primary Health Center.</span>
                </li>

                <li>
                  <FaLeaf className="icon" />
                  <span>Near Dharmasthala Ayurvedic Center (8 km).</span>
                </li>

                <li>
                  <FaHotel className="icon" />
                  <span>Close to Hoysala Village Resort (1.5 km).</span>
                </li>

                <li>
                  <FaBuilding className="icon" />
                  <span>Near Heritage Club (3.3 km).</span>
                </li>

                <li>
                  <FaCity className="icon" />
                  <span>Fast-growing residential area of Hassan.</span>
                </li>

              </ul>
            </Col>
          </Row>

          {/* BOOKING */}
          <p className="booking-text blink">
            <strong style={{ fontSize: "larger", color: "green" }}>
              Bookings Are Open Now!
            </strong>
          </p>

          <p className="booking-p">
            Allotment of plots will be confirmed on
            <b> 'First come first serve basis'.</b>
          </p>

        </Card.Body>
      </Card>
    </div>
  );
};

export default NearByPlaces;