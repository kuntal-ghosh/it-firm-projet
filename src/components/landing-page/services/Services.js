import React from "react";
import styles from "./Services.module.scss";
import cx from "classname";
const Services = () => {
  return (
    <>
      <section className={cx("container-fluid", styles.card_description)}>
        <div
          className={cx(
            "card-deck d-flex justify-content-center justify-content-between",
            styles.card_deck
          )}
        >
          <div
            className={cx(
              "card d-flex flex-column justify-content-center align-items-center p-3",
              styles.card
            )}
          >
            <img src="images/service1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Web Design</h5>
              <p className="card-text text-center"> Anythings</p>
            </div>
          </div>
          <div
            className={cx(
              "card d-flex flex-column justify-content-center align-items-center p-3",
              styles.card
            )}
          >
            <img src="images/service2.png" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text"> Anythings</p>
            </div>
          </div>
          <div
            className={cx(
              "card d-flex flex-column justify-content-center align-items-center p-3",
              styles.card
            )}
          >
            <img src="images/service3.png" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text"> Anythings</p>
            </div>
          </div>

          <div
            className={cx(
              "card d-flex flex-column justify-content-center align-items-center p-3",
              styles.card
            )}
          >
            <img src="images/service4.png" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Core IT Solution</h5>
              <p className="card-text"> Anythings</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
