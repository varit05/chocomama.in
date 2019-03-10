import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authActions } from "../../store/actions/auth.actions";
import { commonActions } from "../../store/actions/common.actions";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.props.getSocialLinks();
  }
  render() {
    const { socialLinks } = this.props;

    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Chocomama</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe pariatur reprehenderit vero atque, consequatur id
                  ratione, et non dignissimos culpa? Ut veritatis, quos illum
                  totam quis blanditiis, minima minus odio!
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                    <a href="#">Destination</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li> */}
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    {/* <li>
                    <a href="#">Privacy Policy</a>
                  </li> */}
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    {/* <li>
                    <a href="#">Discounts</a>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit minima
                  minus odio.
                </p>

                <form action="#" method="post">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-secondary text-white bg-transparent"
                      placeholder="Enter Email"
                      aria-label="Enter Email"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        id="button-addon2"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="mb-5">
                {socialLinks
                  ? socialLinks.map(socialLink =>
                      Object.keys(socialLink).map((slink, index) => (
                        <a
                          href={socialLink[slink].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-0 pr-3"
                          key={index}
                        >
                          <span
                            className={`icon-${socialLink[slink].website}`}
                          />
                        </a>
                      ))
                    )
                  : ""}
              </div>

              <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart-o" aria-hidden="true" /> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(authActions.logOut()),
    getSocialLinks: () => dispatch(commonActions.getSocialLinks())
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    socialLinks: state.common.socialLinks
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
