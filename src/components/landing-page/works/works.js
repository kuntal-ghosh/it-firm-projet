// import React from "react";

// const Works = () => {
//   return (
//     <>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         <ol className="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             className="active"
//           ></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100"
//               src="images/carousel-1.png"
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="images/carousel-2.png"
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="images/carousel-4.png"
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Works;
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./works.module.scss";
import cx from "classname";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      focusOnSelect: true,
      infinite: true,
      pauseOnSelect: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      //   slidesPerRow: 3,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className={cx("carousel-item active", styles.item)}>
              <img
                className="d-block w-100"
                src="images/carousel-1.png"
                alt="First slide"
              />
            </div>
          </div>
          <div>
            <div className={cx("carousel-item active", styles.item)}>
              <img
                className="d-block w-100"
                src="images/carousel-2.png"
                alt="First slide"
              />
            </div>{" "}
          </div>
          <div>
            <div className={cx("carousel-item active", styles.item)}>
              <img
                className="d-block w-100"
                src="images/carousel-4.png"
                alt="First slide"
              />
            </div>{" "}
          </div>
          <div>
            <div className={cx("carousel-item active", styles.item)}>
              <img
                className="d-block w-100"
                src="images/carousel-5.png"
                alt="First slide"
              />
            </div>{" "}
          </div>
          <div>
            <div className={cx("carousel-item active", styles.item)}>
              <img
                className="d-block w-100"
                src="images/carousel-2.png"
                alt="First slide"
              />
            </div>{" "}
          </div>
          <div>
            <div className={cx("carousel-item active", styles.item)}>
              <img
                className="d-block w-100"
                src="images/carousel-2.png"
                alt="First slide"
              />
            </div>{" "}
          </div>
        </Slider>
      </div>
    );
  }
}
