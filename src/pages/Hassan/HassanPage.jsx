// src/pages/MarasandraPage/MarasandraPage.js

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Card, Container, Modal } from "react-bootstrap";
import "../../pages/Hassan/HassanPage.css";
import waterImage from "../../images/water.svg";
import urbanismImage from "../../images/urbanism.svg";
import inspectionImage from "../../images/inspection.svg";
import clubhouseImage from "../../images/clubhouse.png";
import woodsImage from "../../images/woods.svg";
import streetLightImage from "../../images/street-light.svg";
import roadImage from "../../images/road.svg";
import parkImage from "../../images/park.svg";
import BankDetails from "./BankDetails";
import BookingDetails from "./BookingDetails";
import Process from "./Process";
import TermsAndConds from "./TermsConditions";
import Amenities from "./Amenities";
import PriceChart from "./PriceChart";
import NearByPlaces from "./NearByPlaces";
import { motion } from "framer-motion";

const HassanPage = () => {

  const [showLayout, setShowLayout] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleOpenLayout = () => setShowLayout(true);
  const handleCloseLayout = () => setShowLayout(false);

  const handleOpenVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const amenities = [
    { id: 1, name: "Water Connection", image: waterImage, backgroundColor: "#f0f0f0" },
    { id: 2, name: "Electricity Connection", image: urbanismImage, backgroundColor: "#f5f5f5" },
    { id: 3, name: "Sanitary Connection", image: inspectionImage, backgroundColor: "#f0f0f0" },
    { id: 4, name: "Club House", image: clubhouseImage, backgroundColor: "#f5f5f5" },
    { id: 5, name: "Tree Plantation", image: woodsImage, backgroundColor: "#f0f0f0" },
    { id: 6, name: "Street Lights", image: streetLightImage, backgroundColor: "#f5f5f5" },
    { id: 7, name: "Wide Black Top Roads", image: roadImage, backgroundColor: "#f0f0f0" },
    { id: 8, name: "Garden", image: parkImage, backgroundColor: "#f5f5f5" }
  ];

  return (

    <Container fluid className="marasandra-page">

      {/* HERO SECTION */}

      <div className="banner-hassan">
        <video autoPlay loop muted playsInline className="hero-bg">
          <source src="https://res.cloudinary.com/dx7pz8dor/video/upload/v1773291864/VIDEO1_chbyd9.mp4" type="video/mp4"/>
        </video>

        <div className="banner-content-marasandra text-center">
          <h1 style={{color:"white",fontWeight:"bold",fontSize:"45px"}}>
            DEFENCE HABITAT HASSAN
          </h1>

          <h3 style={{color:"white",fontSize:"28px"}}>
            Hassan – Belur Main Road
          </h3>
        </div>
      </div>

      <Marquee className="marquee" direction="left" speed={50}>
        <span>
          "A-Khata Residential Plots Available."
          &emsp;&emsp;
          "21 Acres Premium Gated Community."
          &emsp;&emsp;
          "Prices Starting From ₹1,671 Per Sq Ft Onwards."
          &emsp;&emsp;
          "Bookings Open – First Come First Serve Basis."
        </span>
      </Marquee>

      <div className="subintro" style={{padding:"0 12px"}}>
        <p>
          Introducing Defence Habitat Hassan – your gateway to premium living in the rapidly developing region of Hassan.
        </p>
      </div>

      <NearByPlaces />
      <Amenities amenities={amenities} />

      {/* Floating Layout Button */}

      {showButton && (
        <motion.button
          className="sticky-layout-btn"
          onClick={handleOpenLayout}
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
        >
          View Layout
        </motion.button>
      )}

      {/* Floating Video Button */}

      <motion.div
  className="floating-video-btn"
  onClick={handleOpenVideo}
  initial={{ scale: 0 }}
  animate={{
    scale: 1,
    y: [0, -12, 0]
  }}
  whileHover={{
    scale: 1.15,
    rotate: 5
  }}
  whileTap={{
    scale: 0.9
  }}
  transition={{
    y: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    },
    scale: {
      duration: 0.4
    }
  }}
>
  🎥
</motion.div>
      {/* VIDEO MODAL (RIGHT SIDE) */}

      <Modal
        show={showVideo}
        onHide={handleCloseVideo}
        dialogClassName="video-right-modal"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Project Video</Modal.Title>
        </Modal.Header> */}

        <Modal.Body style={{ padding: "8px" }}>
          <video
            controls
            autoPlay
            style={{
              width:"100%",
              height:"80vh",
              borderRadius:"12px",
              objectFit:"cover"
            }}
          >
            <source
              src="https://res.cloudinary.com/dx7pz8dor/video/upload/v1773291876/VIDEO2_lakerg.mp4"
              type="video/mp4"
            />
          </video>
        </Modal.Body>
      </Modal>

      {/* LAYOUT MODAL */}

      <Modal show={showLayout} onHide={handleCloseLayout} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Layout</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{textAlign:"center"}}>
          <img
            src="https://res.cloudinary.com/dx7pz8dor/image/upload/v1773293150/LayoutPlan_IMage_xr0ihr.jpg"
            alt="Layout"
            style={{width:"100%",borderRadius:"8px"}}
          />
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default HassanPage;