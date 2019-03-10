import React from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import Carousel from "../views/Carousel";
import Explore from "../views/Explore";
import Features from "../views/Features";
import PopularChocolate from "../views/PopularChocolate";

class Home extends React.Component {
  state = {
    homeData: []
  };

  async componentDidMount() {
    const homeRef = firebase.database().ref("home");
    homeRef.once("value", snapshot => {
      const data = [];
      snapshot.forEach(childSnapShot => {
        data.push({
          ...childSnapShot.val()
        });
        this.setState({ homeData: data });
      });
    });
  }

  render() {
    const { homeData } = this.state;
    return (
      <React.Fragment>
        <Carousel />
        <Explore exploreData={homeData[1]} />
        <Features featureData={homeData[2]} />
        <PopularChocolate popular={homeData[3]} />
        <div className="site-section border-top">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="mb-5 text-black">Want To Buy?</h2>
                <p className="mb-0">
                  <Link
                    to="/dashboard"
                    className="btn btn-primary py-3 px-5 text-white"
                  >
                    Book Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
