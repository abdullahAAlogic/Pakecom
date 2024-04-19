import React from "react";
import Layout from "../layout/Layout";
import Tabs from "../tabs/Tabs";

const Home = () => {
  return (
    <div>
      <Layout>
        <section className="hm-slider">
          <img
            src="images/banner.jpg"
            className="main-banner-img wow fadeInLeft "
            alt="images"
          />
          <img src="images/flame-img.png" className="img1" alt="images" />
          <img
            src="images/girl-img.png"
            className="img2 wow slideInRight"
            alt="images"
          />
          <div className="main-sl-mn">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8 col-xl-7">
                  <div className="main-banner-txt wow flipInX">
                    <h1>
                      <span>fitness</span>pro mart
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliqui
                    </p>
                    <a href="about.html" className="btn10">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-sec ">
          <img src="images/flame-img.png" className="img2" alt="images" />
          <img src="images/black-shadow.png" className="img-1" alt="images" />
          <span className="shade"></span>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="abt-img wow slideInLeft">
                  <img src="images/abt-txt-img.png" alt="images" />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="abt-img-txt wow bounceInUp">
                  <h6>about us</h6>
                  <h2>ABOUT US</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquiLorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliqui
                  </p>
                  <p>
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliqui
                  </p>
                  <a href="about.html" className="btn10">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fitnas-prosc ">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="fit-inn fit-inn-1 wow bounceInLeft">
                  <h2>fitness</h2>
                  <div className="fit-txt">
                    <h4>fitness leggings</h4>
                    <p>laboris nisi ut aliqui</p>
                  </div>
                  <img src="images/fit-img-4.png" alt="images" />
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div
                  className="fit-inn fit-inn-2 wow bounceInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="fit-txt">
                    <h4>fitness trackers</h4>
                    <p>laboris nisi ut aliqui</p>
                  </div>
                  <img src="images/fit-img-2.jpg" alt="images" />
                </div>

                <div className="fit-inn fit-inn-3  ">
                  <div className="fit-txt wow bounceInUp" data-wow-delay="0.6s">
                    <h4>
                      fitness <br /> accessories
                    </h4>
                  </div>
                  <img
                    src="images/fit-img-3.jpg"
                    className="wow bounceInUp"
                    data-wow-delay="0.6s"
                    alt="images"
                  />
                  <h2>pro mart</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* product tabs section */}
        <Tabs/>
      </Layout>
    </div>
  );
};

export default Home;
