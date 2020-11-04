import React from "react";
import styles from "./CustomizedImage.module.scss";
import cx from "classname";

const CustomizedImage = () => {
  return (
    <div className={cx("container", styles.img_container)}>
      <div className={cx(styles.img_content)}>
        <img
          src="/images/Illustration.png"
          className={cx("img-fluid img-content")}
          alt="Responsive image"
        ></img>

        <button
          type="button"
          className={cx("btn btn-success mt-5", styles.button)}
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default CustomizedImage;
