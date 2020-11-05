import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4 mt-5 d-block">
            <p className="text-center">
              Millions of people of all ages and from around the world are
              improving their lives with us
            </p>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row footer-block">
              {/* <div className="col-12 col-md-4 pt-5 text-center">
                <ul>
                  <li>
                    <b>Courses</b>{" "}
                  </li>
                  <li>Graphic Designer</li>
                  <li>Web Design</li>
                  <li>Business</li>
                  <li>Marketing</li>
                  <li>Engineering</li>
                </ul>
              </div> */}
              <div className="col-12 col-md-6 pt-5 text-center">
                <ul>
                  <li>
                    <b>Terms</b>{" "}
                  </li>
                  <li>Graphic Designer</li>
                  <li>Web Design</li>
                  <li>Business</li>
                  <li>Marketing</li>
                  <li>Engineering</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 pt-5 text-center">
                <ul>
                  <li>
                    <b>Useful Links</b>{" "}
                  </li>
                  <li>Graphic Designer</li>
                  <li>Web Design</li>
                  <li>Business</li>
                  <li>Marketing</li>
                  <li>Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-light">
        <div className=" m-auto mt-5">
          <p className="text-center">Copyright & copy 2020 KrazyIT.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
