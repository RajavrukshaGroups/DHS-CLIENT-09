// src/pages/MarasandraPage/MarasandraPage.js

import React from "react";
import Marquee from "react-fast-marquee";
import { Card, Container } from "react-bootstrap";
import "../../pages/Hassan/HassanPage.css";
import waterImage from "../../images/water.svg";
import urbanismImage from "../../images/urbanism.svg";
import inspectionImage from "../../images/inspection.svg";
import clubhouseImage from "../../images/clubhouse.png";
import woodsImage from "../../images/woods.svg";
import streetLightImage from "../../images/street-light.svg";
import roadImage from "../../images/road.svg";
import parkImage from "../../images/park.svg";
import ContactForm from "../ContactForm";
import seal from "../../images/msTAMP.png";
import Marasandra_seal from "../../images/Marasandra_seal.png";
// import aboutVideo from "../../videos/Defence Habitat.mp4";
import BankDetails from "./BankDetails";
import BookingDetails from "./BookingDetails";
import Process from "./Process";
import TermsAndConds from "./TermsConditions";
import Amenities from "./Amenities";
import PriceChart from "./PriceChart";
import NearByPlaces from "./NearByPlaces";

const HassanPage = () => {
  const amenities = [
    {
      id: 1,
      name: "Water Connection",
      image: waterImage,
      backgroundColor: "#f0f0f0",
    },
    {
      id: 2,
      name: "Electricity Connection",
      image: urbanismImage,
      backgroundColor: "#f5f5f5",
    },
    {
      id: 3,
      name: "Sanitary Connection",
      image: inspectionImage,
      backgroundColor: "#f0f0f0",
    },
    {
      id: 4,
      name: "Club House",
      image: clubhouseImage,
      backgroundColor: "#f5f5f5",
    },
    {
      id: 5,
      name: "Tree Plantation",
      image: woodsImage,
      backgroundColor: "#f0f0f0",
    },
    {
      id: 6,
      name: "Street Lights",
      image: streetLightImage,
      backgroundColor: "#f5f5f5",
    },
    {
      id: 7,
      name: "Wide Black Top Roads",
      image: roadImage,
      backgroundColor: "#f0f0f0",
    },
    { id: 8, name: "Garden", image: parkImage, backgroundColor: "#f5f5f5" },
  ];

  const bankAccountDetails = [
    {
      label: "Account Name",
      value: "DEFENCE HABITAT HOUSING COOPERATIVE SOCIETY LIMITED.",
    },
    { label: "Account Number", value: "051388700000120" },
    { label: "Bank", value: "YES BANK LTD." },
    { label: "Branch", value: "SAHAKAR NAGAR" },
    { label: "IFSC Code", value: "YESB0000513" },
    { label: "Account Type", value: "Current Account" },
  ];
  const priceChartTableHeading = [
    "Dimension",
    "Rate per Sqft",
    "Total Amount",
    "Down Payment 30%",
    "First Installment 30%",
    "Second Installment 20%",
    "Third Installment 20%",
  ];

  const oldPriceChartData = [
    {
      dimension: "30X40",
      price: "1399/-",
      total_amount: "16,78,800",
      down_payment: "5,03,640",
      first_installment: "5,03,640",
      second_installment: "3,35,760",
      third_installment: "3,35,760",
    },
    {
      dimension: "30X50",
      price: "1399/-",
      total_amount: "20,98,500",
      down_payment: "6,29,550",
      first_installment: "6,29,550",
      second_installment: "4,19,700",
      third_installment: "4,19,700",
    },
    {
      dimension: "40X60",
      price: "1399/-",
      total_amount: "33,57,600",
      down_payment: "10,07,280",
      first_installment: "10,07,280",
      second_installment: "6,71,520",
      third_installment: "6,71,520",
    },
    // {
    //   dimension: "50X80",
    //   price: "1399/-",
    //   total_amount: "55,96,000",
    //   down_payment: "16,78,800",
    //   first_installment: "16,78,800",
    //   second_installment: "11,19,200",
    //   third_installment: "11,19,200",
    // },
    // {
    //   dimension: "100X120",
    //   price: "1399/-",
    //   total_amount: "1,67,88,000",
    //   down_payment: "50,36,400",
    //   first_installment: "50,36,400",
    //   second_installment: "33,57,600",
    //   third_installment: "33,57,600",
    // },
  ];

  const newPriceChartData = [
    {
      dimension: "30X40",
      price: "1699/-",
      total_amount: "20,38,800",
      down_payment: "6,11,640",
      first_installment: "6,11,640",
      second_installment: "4,07,760",
      third_installment: "4,07,760",
    },
    {
      dimension: "30X50",
      price: "1699/-",
      total_amount: "25,48,500",
      down_payment: "7,64,550",
      first_installment: "7,64,550",
      second_installment: "5,09,700",
      third_installment: "5,09,700",
    },
    {
      dimension: "40X60",
      price: "1699/-",
      total_amount: "40,77,600",
      down_payment: "12,23,280",
      first_installment: "12,23,280",
      second_installment: "8,15,520",
      third_installment: "8,15,520",
    },
    // {
    //   dimension: "50X80",
    //   price: "1399/-",
    //   total_amount: "55,96,000",
    //   down_payment: "16,78,800",
    //   first_installment: "16,78,800",
    //   second_installment: "11,19,200",
    //   third_installment: "11,19,200",
    // },
    // {
    //   dimension: "100X120",
    //   price: "1399/-",
    //   total_amount: "1,67,88,000",
    //   down_payment: "50,36,400",
    //   first_installment: "50,36,400",
    //   second_installment: "33,57,600",
    //   third_installment: "33,57,600",
    // },
  ];

  return (
    <Container fluid className="marasandra-page">
      <div className="banner-hassan">
         <video autoPlay loop muted playsInline className="hero-bg">
            <source src="https://res.cloudinary.com/dx7pz8dor/video/upload/v1773291864/VIDEO1_chbyd9.mp4" type="video/mp4" />
          </video>
        <div className="banner-content-marasandra text-center md:-ml-20">
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "emoji",

            }}
          >
            DEFENCE HABITAT HASSAN
          </h1>
          {/* <h1 style={{color:'white'}}>MARASANDRA</h1> */}
          {/* <h3 style={{ color: "white", fontFamily: "emoji", fontSize: "28px" }}>
            North Bangalore{" "}
          </h3> */}
          <h3 style={{ color: "white", fontFamily: "emoji", fontSize: "28px" }}>
            {" "}
            Hassan – Belur Main Road
          </h3>
        </div>
        {/* <div className="stamps">
          <img src={Marasandra_seal} className="seals" alt="" title="" />
        </div> */}
      </div>
      {/* <Marquee className="marquee" direction="left" speed={50}>
        <span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Works
          Will Be Executed As Per BMRDA/DPA Norms."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; "Change
          Of Land Use Process Is
          Completed."&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Booking
          are open."
        </span>
        
      </Marquee> */}
      <Marquee className="marquee" direction="left" speed={50}>
        <span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "A-Khata Residential Plots Available."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "21 Acres Premium Gated Community."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "Prices Starting From ₹1,671 Per Sq Ft Onwards."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "Bookings Open – First Come First Serve Basis."
        </span>
      </Marquee>
      <div className="subintro"  style={{ paddingLeft:"12px", paddingRight:"12px"}}>
        <p>
          "Introducing Defence Habitat Hassan – your gateway to premium living in the rapidly developing region of Hassan. Strategically located and thoughtfully planned, our exclusive residential layout offers a harmonious blend of modern amenities, natural surroundings, and excellent connectivity. Designed to provide comfort, convenience, and long-term value, Defence Habitat Hassan presents an ideal opportunity for both homeowners and smart investors seeking a promising future."
        </p>
      </div>
      <NearByPlaces />
      {/* Amenities Section */}
      <Amenities amenities={amenities} />

      {/* Price Chart Section */}
      <section
        className="price-chart-section"
        style={{
          backgroundColor: "#f8f6fe",
          marginBottom: "40px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <PriceChart
          // priceChartTableHeading={priceChartTableHeading}
          // priceChartData={priceChartData}
          priceChartTableHeading={priceChartTableHeading}
          oldPriceChartData={oldPriceChartData}
          newPriceChartData={newPriceChartData}
        />
        {/* Terms and Conditions Section */}
        <TermsAndConds />
      </section>
      {/* Bank Details Section */}
      <section className="bank-details-section">
        <Container>
          <Card className="bank-details-card shadow-sm">
            <BookingDetails />
            <BankDetails bankAccountDetails={bankAccountDetails} />
            <Process />
          </Card>
        </Container>
      </section>
    </Container>
  );
};

export default HassanPage;
