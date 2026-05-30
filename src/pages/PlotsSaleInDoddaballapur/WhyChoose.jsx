import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./DoddaballapurPlotsPage.css";
import {
  LandPlot,
  PencilRuler,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Trees,
} from "lucide-react";
const benefits = [
  {
    icon: LandPlot,
    title: "Land Ownership",
    desc: "Complete ownership with long-term asset value.",
  },
  {
    icon: PencilRuler,
    title: "Custom Design",
    desc: "Build your dream home exactly the way you want.",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation",
    desc: "Better capital growth compared to many alternatives.",
  },
  {
    icon: Wallet,
    title: "Low Maintenance",
    desc: "Reduced recurring costs and maintenance expenses.",
  },
  {
    icon: ShieldCheck,
    title: "Greater Privacy",
    desc: "Enjoy independent living with enhanced privacy.",
  },
  {
    icon: Trees,
    title: "Future Ready",
    desc: "Ideal for future construction and family expansion.",
  },
];

const WhyChoose = () => (
  <>
  <Card className="property-card shadow-sm">
    <Card.Body>
      <h2 className="section-heading" style={{ marginTop: 0, textAlign: "center" }}>
        Why Choose Defence Housing Society
      </h2>
      <div className="title-divider" />
      <div className="title-divider" style={{ marginBottom: "20px" }} />
      <Row>
        <Col md={6}>
          <ul className="icon-list">
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Strategically located projects in North Bangalore.
              </span>
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Legally approved A Khata residential plots.
              </span>
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Well-planned gated community layouts.
              </span>
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Modern infrastructure and premium amenities.
              </span>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="icon-list">
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Excellent connectivity to key locations and airports.
              </span>
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                High appreciation potential for long-term investors.
              </span>
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Transparent documentation process with no hidden charges.
              </span>
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <span style={{ color: "black" }}>
                Trusted by homebuyers, NRIs, and investors across India.
              </span>
            </li>
          </ul>
        </Col>
      </Row>
      <p className="booking-text blink">
        <strong style={{ fontSize: "larger" }}>
          Bookings Are Open Now – Secure Your Plot Today!
        </strong>
      </p>
      <p style={{ textAlign: "center" }}>
        Allotment of plots will be confirmed on&nbsp;
        <b>'First come first serve basis'</b>
      </p>
    </Card.Body>
  </Card>

{/* ===== 10. The Growing Demand for Plotted Developments ===== */}
      
     <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#f8f9fa] to-white overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />

  <div className="relative max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 font-semibold rounded-full text-sm mb-5 border border-red-100">
          Why Invest in Plots?
        </span>

        <h2 className="text-xl md:text-4xl font-extrabold text-[#24457b] leading-tight mb-6">
          The Growing<br/> Demand for
          <span className="block  text-red-700">
            Plotted Developments
          </span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Plotted developments have emerged as one of the most preferred
          investment choices in Bangalore. They offer complete ownership,
          unmatched flexibility, and strong long-term appreciation,
          making them ideal for both investors and future homeowners.
        </p>

        <p className="text-gray-600 leading-relaxed">
          As urban land becomes increasingly scarce, strategically located
          plotted communities in North Bangalore continue to witness
          rising demand and exceptional growth potential.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div className="bg-white px-5 py-3 rounded-xl shadow-md border">
            <p className="text-2xl font-bold text-[#24457b]">100%</p>
            <span className="text-sm text-gray-500">
              Land Ownership
            </span>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow-md border">
            <p className="text-2xl font-bold text-[#24457b]">High</p>
            <span className="text-sm text-gray-500">
              Appreciation Potential
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Benefits */}
      <div className="grid sm:grid-cols-2 gap-5">
        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Icon
                  size={28}
                  className="text-red-700"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-lg font-bold text-[#24457b] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
</>
);

export default WhyChoose;
