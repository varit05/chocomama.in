import React from "react";

const PopularChocolate = props => {
  const { popular } = props;
  return (
    <React.Fragment>
      {popular ? (
        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center">
                <h2 className="font-weight-light text-black">
                  {popular.title}
                </h2>
                <p className="color-black-opacity-5">{popular.smallDesc}</p>
              </div>
            </div>
            <div className="row">
              {popular.current.map((current, index) => (
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" key={index}>
                  <a href="#" className="unit-1 text-center">
                    <img
                      src={current.img}
                      alt={current.img}
                      className="img-fluid"
                    />
                    <div className="unit-1-text">
                      <strong className="text-primary mb-2 d-block">
                        $ {current.price}
                      </strong>
                      <h3 className="unit-1-heading">{current.title}</h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PopularChocolate;
