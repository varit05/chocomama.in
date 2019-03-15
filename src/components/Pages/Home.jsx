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

  handlePaymentClick = (e)=>{
    var options = {
      "key": "rzp_test_wPjl0sojlA2WjB",
      "amount": "12000", // 2000 paise = INR 20
      "name": "Chocomama",
      "description": "It's the Cloud Nine",
      "image": `/image.jpg`,
      "handler": function (response){
          alert(`Thanks for the order!`);
      },
      "prefill": {
          "name": "Sanket Patel",
          "email": "test@test.com"
      },
      "notes": {
          "address": "Hello World"
      },
      "theme": {
          "color": "#F37254"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
    e.preventDefault();
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
                  <button id="rzp-button1" onClick={this.handlePaymentClick}  className="btn btn-primary py-3 px-5 text-white" onClick={this.handlePaymentClick}>Buy Now</button>
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
