import React, { useState } from "react";
import "../Gallery/gallery.css";
import Video from "../../videos/galleryjcb.mp4";
import One from "../Project_Images/two.jpg";
import Two from "../Project_Images/three.jpg";
import Three from "../Project_Images/four.jpg";
import Four from "../Project_Images/five.jpg";
import Five from "../Project_Images/DSC04739.jpg";
import Six from "../Project_Images/six.jpg";
import Seven from "../Project_Images/seven.JPG";
import Eight from "../Project_Images/eight.JPG";
import Nine from "../Project_Images/nine.JPG";
import thirteen from "../Project_Images/thirteen.JPG";
import ten from '../Project_Images/ten.JPG';
import twelve from "../Project_Images/twelve.JPG";
import RecentImgfirst from "../../images/galleryImages/first_image.jpg"
import RecentImgSecond from "../../images/galleryImages/second_image.jpg"
import RecentImgThird from "../../images/galleryImages/thirdImage.jpg"
import RecentImgFourth from "../../images/galleryImages/forthImage.jpg"
import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg"
import RecentImgSixth from "../../images/galleryImages/imageSix.jpg"

import gallery6 from "../../images/galleryImages/gallery6.jpeg";
import gallery7 from "../../images/galleryImages/gallery7.jpeg";
import gallery8 from "../../images/galleryImages/gallery8.jpeg";
import gallery9 from "../../images/galleryImages/gallery9.jpeg";
import gallery10 from "../../images/galleryImages/gallery10.jpeg";
import gallery11 from "../../images/galleryImages/gallery11.jpeg";
import gallery12 from "../../images/galleryImages/gallery12.jpeg";
import gallery13 from "../../images/galleryImages/gallery13.jpeg";
import gallery14 from "../../images/galleryImages/gallery14.jpeg";
import gallery15 from "../../images/galleryImages/gallery15.jpeg";
import gallery16 from "../../images/galleryImages/gallery16.jpeg";
import gallery17 from "../../images/galleryImages/gallery17.jpeg";
import gallery18 from "../../images/galleryImages/gallery18.jpeg";
import gallery19 from "../../images/galleryImages/gallery19.jpeg";
import gallery20 from "../../images/galleryImages/gallery20.jpeg";
import gallery21 from "../../images/galleryImages/gallery21.jpeg";
import gallery22 from "../../images/galleryImages/gallery22.jpeg";
import gallery23 from "../../images/galleryImages/gallery23.jpeg";
import gallery24 from "../../images/galleryImages/gallery24.jpeg";
import gallery25 from "../../images/galleryImages/gallery25.jpeg";
import gallery26 from "../../images/galleryImages/gallery26.jpeg";
import gallery27 from "../../images/galleryImages/gallery27.jpeg";
import gallery28 from "../../images/galleryImages/gallery28.jpeg";
import gallery29 from "../../images/galleryImages/gallery29.jpeg";
import gallery30 from "../../images/galleryImages/gallery30.jpeg";
import gallery31 from "../../images/galleryImages/gallery31.jpeg";
import gallery32 from "../../images/galleryImages/gallery32.jpeg";
import gallery33 from "../../images/galleryImages/gallery33.jpeg";


function Gallery() {
  const allImages = [gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,gallery21,gallery22,gallery23,gallery24,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30,gallery31,gallery32,gallery33,RecentImgfirst,RecentImgSecond,RecentImgThird,RecentImgFourth,RecentImgFifth,RecentImgSixth,One, Five, Three, Six, Two, thirteen, Seven, ten, twelve,];
  const [visibleImages, setVisibleImages] = useState(6);

  const loadMore = () => {
    if (visibleImages === 6) {
      setVisibleImages(allImages.length); // Show all images
    } else {
      setVisibleImages(6);
    }
  };

  return (
    <div>
      <section className="video-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <div className="sec-title">
                <p className="sec-titles">
                  Join us at Defence Habitat, where your vision for the perfect
                  property is our mission. Let us help you navigate the real
                  estate market with confidence and ease.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box">
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="mostvideo"
                >
                  <source src={Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="containers">
        {allImages.slice(0, visibleImages).map((image, index) => (
          <div className="img-container" key={index}>
            <img src={image} alt={`img-${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="loadMore-btn" onClick={loadMore}>
  {visibleImages === 6 ? "Load More" : "Show Less"}
  <span>
    {visibleImages === 6 ? (
      <p>
        <i className="arrow down"></i>
      </p>
    ) : (
      <p>
        <i className="arrow up"></i>
      </p>
    )}
  </span>
</button>
    </div>
  );
}

export default Gallery;


