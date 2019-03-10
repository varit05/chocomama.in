import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as firebase from "firebase/app";

import { authActions } from "../../store/actions/auth.actions";

import { commonActions } from "../../store/actions/common.actions";

const style = {
  icon: {
    position: "relative",
    top: "3px"
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerDetails: []
    };
    this.props.getSocialLinks();
  }

  async componentDidMount() {
    const headerRef = firebase.database().ref("Header");
    let data = {};
    headerRef.once("value", snapshot => {
      data = { ...snapshot.val() };
      this.setState({ headerDetails: data });
    });
  }

  render() {
    let { auth, socialLinks } = this.props;
    const { headerDetails } = this.state;

    return (
      <header className="site-navbar py-1" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0">
                <Link to="/" className="text-black h2 mb-0">
                  {headerDetails.name}
                </Link>
              </h1>
            </div>
            <div className="col-10 col-md-8 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right text-lg-center"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  {auth.uid ? (
                    <React.Fragment>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                      {/* eslint-disable-next-line */}
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link"
                          onClick={this.props.logOut}
                        >
                          Log out
                        </a>
                      </li>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <li>
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/register">
                          Register
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                </ul>
              </nav>
            </div>
            <div className="col-6 col-xl-2 text-right">
              <div className="d-none d-xl-inline-block">
                <ul
                  className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
                  data-classname="social"
                >
                  {" "}
                  {socialLinks
                    ? socialLinks.map(socialLink =>
                        Object.keys(socialLink).map((slink, index) => (
                          <li key={index}>
                            <a
                              href={socialLink[slink].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pl-3 pr-3 text-black"
                            >
                              <span
                                className={`icon-${socialLink[slink].website}`}
                              />
                            </a>
                          </li>
                        ))
                      )
                    : ""}
                </ul>
              </div>

              <div
                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style={style.icon}
              >
                <a
                  href="#"
                  target="_blank"
                  className="site-menu-toggle js-menu-toggle text-black"
                >
                  <span className="icon-menu h3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
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
)(Header);
