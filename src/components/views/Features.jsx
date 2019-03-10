import React from "react";

const Features = props => {
  const { featureData } = props;
  return (
    <React.Fragment>
      <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch">
            {featureData
              ? Object.keys(featureData).map((feature, index) => (
                  <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                    <div className="unit-4 d-flex">
                      <div className="unit-4-icon mr-4">
                        <span className="text-primary flaticon-airplane" />
                      </div>
                      <div>
                        <h3>{featureData[feature].title}</h3>
                        <p>{featureData[feature].desc}</p>
                        <p>
                          <a href={featureData[feature].learnMoreLink}>
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
