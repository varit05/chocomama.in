import React from "react";

const Explore = props => {
  const { exploreData } = props;
  return (
    <React.Fragment>
      <div className="site-section">
        <div className="container overlap-section">
          <div className="row">
            {exploreData
              ? Object.keys(exploreData).map((explore, index) => (
                  <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                    <a href="#" className="unit-1 text-center">
                      <img
                        src={exploreData[explore].image}
                        alt={exploreData[explore].image}
                        className="img-fluid"
                      />
                      <div className="unit-1-text">
                        <h3 className="unit-1-heading">
                          {exploreData[explore].title}
                        </h3>
                      </div>
                    </a>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explore;
