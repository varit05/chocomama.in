import React from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import Team from "../views/Team";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
      company: {}
    };
  }

  async componentDidMount() {
    let data = {};
    const aboutRef = firebase.database().ref("about");
    aboutRef.once("value", snapshot => {
      console.log(snapshot);
      data = { ...snapshot.val() };
      this.setState({ about: data });
    });
  }

  render() {
    const { about, points } = this.state;
    let bgImage = {
      backgroundImage: "url(" + this.state.about.bgImage + ")"
    };
    console.log("about", about);
    return (
      <React.Fragment>
        <div
          className="site-blocks-cover inner-page-cover"
          style={bgImage}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light">{about.name}</h1>
                <div>
                  <Link to="/">Home</Link>{" "}
                  <span className="mx-2 text-white"> • </span>{" "}
                  <span className="text-white">{about.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  src={about.bgImage}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">
                  {about.company ? about.company.about : ""}
                </h2>
                <p>{about.company ? about.company.desc : ""}</p>

                <ul className="list-unstyled">
                  {" "}
                  {points
                    ? points.map((point, index) => (
                        <li className="d-flex align-items-center" key={index}>
                          <span className="icon-check2 text-primary h3 mr-2" />
                          <span>{point.name}</span>
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Team team={about.team} />
      </React.Fragment>
    );
  }
}

export default About;
