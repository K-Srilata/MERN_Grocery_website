import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../Page/About.css';

const imageData = [
 
  {
    label: "Image 1",
    alt: "image1",
    url: "https://img.freepik.com/free-photo/man-delivering-groceries-customers_23-2149950071.jpg?w=996&t=st=1701510605~exp=1701511205~hmac=1a4b45db7021494268eed2b1094541edc52c1a02abc942711b766ac6a4089273"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://img.freepik.com/free-photo/man-taking-care-home-delivering-groceries_52683-102849.jpg?t=st=1701510605~exp=1701511205~hmac=d5c1e0d4b0a12d01559f3ab49a30caf0f167a02c632bf567e41ebea2576d57a1"
  },
  {
    label: "Image 3",
    alt: "image3",
    url:
      "https://img.freepik.com/free-photo/man-taking-care-home-delivering-groceries_52683-102848.jpg?w=996&t=st=1701513726~exp=1701514326~hmac=dabcd924fa29cbc5619119392bc4a0f4678fd82b929e8ba048336fe046e966d9"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

export default function About() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}