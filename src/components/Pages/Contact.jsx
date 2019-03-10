import React from "react";
import * as firebase from "firebase/app";
// import imgUrl from "../../images/about-chocomama.jpg";
// import contact from "../../images/contact.jpg";
// const bgImage = {
//   backgroundImage: "url(" + imgUrl + ")"
// };

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDetails: {},
      moreInfo: {},
      addressSection: {}
    };
  }

  async componentDidMount() {
    const headerRef = firebase.database().ref("contact");
    let data = {};
    headerRef.once("value", snapshot => {
      data = { ...snapshot.val() };
      this.setState({ contactDetails: data });
    });
  }

  render() {
    const { addressSection, moreInfo } = this.state.contactDetails;
    console.log(this.state);
    console.log(moreInfo);

    const bgImage = {
      backgroundImage: "url(" + this.state.contactDetails.bgImage + ")"
    };
    return (
      <React.Fragment>
        <div
          class="site-blocks-cover inner-page-cover"
          style={bgImage}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <h1 class="text-white font-weight-light">Get In Touch</h1>
                <div>
                  <a href="index.html">Home</a>{" "}
                  <span class="mx-2 text-white"> • </span>{" "}
                  <span class="text-white">Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section bg-light" data-aos="fade-up">
          <div class="container">
            <div class="row">
              <div class="col-md-7 mb-5">
                <form action="#" class="p-5 bg-white">
                  <div class="row form-group">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <label class="text-black" for="fname">
                        First Name
                      </label>
                      <input type="text" id="fname" class="form-control" />
                    </div>
                    <div class="col-md-6">
                      <label class="text-black" for="lname">
                        Last Name
                      </label>
                      <input type="text" id="lname" class="form-control" />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="email">
                        Email
                      </label>
                      <input type="email" id="email" class="form-control" />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="subject">
                        Subject
                      </label>
                      <input type="subject" id="subject" class="form-control" />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="text-black" for="message">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        class="form-control"
                        placeholder="Write your notes or questions here..."
                      />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <input
                        type="submit"
                        value="Send Message"
                        class="btn btn-primary py-2 px-4 text-white"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-5">
                <div class="p-4 mb-3 bg-white">
                  <p class="mb-0 font-weight-bold">Address</p>
                  <p class="mb-4">
                    {addressSection ? addressSection.companyAddress : ""}
                  </p>

                  <p class="mb-0 font-weight-bold">Phone</p>
                  <p class="mb-4">
                    <a href="#">{addressSection ? addressSection.phone : ""}</a>
                  </p>

                  <p class="mb-0 font-weight-bold">Email Address</p>
                  <p class="mb-0">
                    <a href="#">{addressSection ? addressSection.email : ""}</a>
                  </p>
                </div>

                <div class="p-4 mb-3 bg-white">
                  <img
                    src={moreInfo ? moreInfo.img : ""}
                    alt="Image"
                    class="img-fluid mb-4 rounded"
                  />
                  <h3 class="h5 text-black mb-3">More Info</h3>
                  <p>{moreInfo ? moreInfo.desc : ""}</p>
                  <p>
                    <a href="#" class="btn btn-primary px-4 py-2 text-white">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
