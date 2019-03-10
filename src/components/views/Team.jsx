import React from "react";
// import ronak from "../../images/ronak.jpeg";

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { team } = this.props;
    return (
      <React.Fragment>
        <div class="site-section">
          <div class="container">
            <div class="row justify-content-center mb-5" data-aos="fade-up">
              <div class="col-md-7">
                <h2 class="font-weight-light text-black text-center">
                  {team ? team.title : ""}
                </h2>
              </div>
            </div>
            <div class="row">
              {team
                ? team.members.map((member, index) => (
                    <div
                      class="col-md-6 col-lg-4 text-center mb-5"
                      data-aos="fade-up"
                      key={index}
                    >
                      <img
                        src={member.img}
                        alt="Image"
                        class="img-fluid w-50 rounded-circle mb-4"
                      />
                      <h2 class="text-black font-weight-light mb-4">
                        {member.name}
                      </h2>
                      <p class="mb-4">{member.desc}</p>
                      <p>
                        <a href="#" class="pl-0 pr-3">
                          <span class="icon-twitter" />
                        </a>
                        <a href="#" class="pl-3 pr-3">
                          <span class="icon-instagram" />
                        </a>
                        <a href="#" class="pl-3 pr-3">
                          <span class="icon-facebook" />
                        </a>
                      </p>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Team;
