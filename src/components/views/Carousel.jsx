import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import imgUrl from "../../images/carousel.jpg";
// const bgImage = {
//   backgroundImage: "url(" + imgUrl + ")"
// };

class Carousel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="slide-one-item home-slider owl-carousel">
          <div
            className="site-blocks-cover overlay"
            // style={bgImage}
            data-aos="fade"
            data-stellar-background-ratio="0.5"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div
                  className="col-md-8"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h1 className="text-white font-weight-light">
                    Never Stop Exploring
                  </h1>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga est inventore ducimus repudiandae.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn btn-primary py-3 px-5 text-white"
                    >
                      Book Now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-blocks-cover overlay"
          // style="background-image: url(images/hero_bg_2.jpg);"
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          {/* <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                  <h1 className="text-white font-weight-light">Love The Places</h1>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga est inventore ducimus repudiandae.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-5 text-white">
                      Book Now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
