// src/pages/MarasandraPage/MarasandraPage.js

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Card, Container } from "react-bootstrap";
import siteapproval from "../images/site_approval_new.png";
import timesexpo from "../images/times_expo.png";
import newsPaper2 from "../images/newsPaper2.jpeg";
import newsPaper3 from "../images/newsPaper3.jpeg";
import "./styles/latestnews.css";

const LatestNews = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const timesExpoText = `Premium Living Meets Affordability in North Bengaluru — Defence Habitat Housing Co-operative Society Ltd (Regd Under Karnataka Co-op Society Act) ...`;

  return (
    <Container fluid className="marasandra-page">
      {/* Banner */}
      <div className="banner-latest">
        <div className="banner-content3">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            Latest News
          </h1>
        </div>
      </div>

      {/* Marquee */}
      <Marquee className="marquee" direction="left" speed={50}>
        <span className="text-capitalize">
          "DHS-Marasandra: Change of land use process is completed."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "DHS-Tapasihalli: DC conversion received."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "Bookings are now open for phase-2."
        </span>
      </Marquee>

      

      {/* Additional Newspaper Images */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "20px",
          justifyItems: "space-around",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {[newsPaper2, newsPaper3,timesexpo].map((img, index) => (
          <div
            key={index}
            className="press-thumbnail"
            style={{
              cursor: "pointer",
              flex: "1 1 250px",
              maxWidth: "350px",
             alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => openLightbox(img)}
          >
            <img
              src={img}
              alt="Newspaper"
              style={{ width: "100%", height: "250px", }}
            />
            <p className="press-thumbnail-note mt-2 small">
              Click the image to view larger
            </p>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Full View"
            style={{
              maxWidth: "95%",
              maxHeight: "95vh",
              objectFit: "contain",
              borderRadius: "6px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
               
            }}
          />
        </div>
      )}

      <Card className="property-card-latest shadow-none border-0">
        <Card.Body>
          <div className="latest-news-layout">
            {/* LEFT SIDE */}
            <div className="latest-news-left">
              <h2 className="ct">Latest News</h2>
              <div className="title-divider"></div>
              <div className="title-divider"></div>
              <div className="flex flex-col sm:flex-row gap-3" >
                    <div>
                    <h5 className="custom-bullet latest-news-line">
                      Defence Habitat Marasandra - Rs.1,399/- sqft (Booking Closed)
                    </h5>

                    <h5 className="custom-bullet latest-news-line">
                      Defence Habitat Tapasihalli - Rs.1099/- sqft (Booking Closed)
                    </h5>

                    <h5 className="custom-bullet latest-news-line">
                      Good News..!!! Applications for new membership are open now,
                      Hurry up! Contact us for more information.
                      <span className="latest-badge">New</span>
                    </h5>

                    <h5 className="custom-bullet latest-news-line">
                      Defence Habitat Marasandra Phase-2 has launched - Rs.1,699/- sqft (Booking Opened)
                      <span className="latest-badge">New</span>
                    </h5>

                    <h5 className="custom-bullet latest-news-line">
                      Defence Habitat Tapasihalli Phase-2 has launched - Rs.1399/- sqft (Booking Opened)
                      <span className="latest-badge">New</span>
                    </h5>
                  </div>
                  <div>
              <h5 className="custom-bullet latest-news-line">
                DHS-Tapasihalli: DPA/BMRDA approval received{" "}
                <a
                  href={siteapproval}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-link"
                >
                  (View Site Approval)
                </a>
              </h5>

              <h5 className="custom-bullet latest-news-line">
                With the launch of Phase 2, we are adding even more to our project.
              </h5>
              </div>
              </div>
            
            </div>

            {/* RIGHT SIDE */}
            {/* <div className="latest-news-right">
              <div className="press-coverage">
                <div className="press-meta">
                  <span>Featured in</span>
                  <strong>Times Now</strong>
                  <span> — </span>
                  <em>Property Focus</em>
                </div>

                <div className="press-stack">
                  <p className="press-stack-text">{timesExpoText}</p>

                  <div
                    className="press-thumbnail"
                    style={{ cursor: "pointer" }}
                    onClick={() => openLightbox(timesexpo)}
                  >
                    <img
                      src={timesexpo}
                      alt="Times Now"
                      className="img-fluid"
                      style={{ width: "100%", height: "250px", paddingLeft: "12px", paddingRight: "12px" }}
                    />
                    <p className="press-thumbnail-note">
                      Click the image to view larger
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LatestNews;