import React, { useState, useContext } from "react";
import styles from "./CustomizedImage.module.scss";
import cx from "classname";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Example } from "../../components/customized-image/example/Example";
import MyVerticallyCenteredModal from "../../components/landing-page/modal/MyVerticallyCenteredModal";
import TShirtLogoTextContext from "../../context/TShirtLogoTextContext";

const CustomizedImage = () => {
  const [boxes, setBoxes] = useContext(TShirtLogoTextContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={cx("container", styles.container)}>
      {boxes.b.title && (
        <h5 className={styles.container_text}>
          You can customize the text using drag and drop
        </h5>
      )}

      <div className={cx("container", styles.img_container)}>
        <div className={cx(styles.img_content)}>
          <div style={{ position: "relative", width: "100%" }}>
            <DndProvider backend={HTML5Backend}>
              <Example />
            </DndProvider>
          </div>
        </div>
      </div>
      {/* modal component will show on button click */}

      <button
        onClick={() => setModalShow(true)}
        type="button"
        className={cx("btn btn-success mt-2", styles.button)}
      >
        {boxes.b.title ? "Update Text" : "Add Text"}
      </button>
      {/* modal component  */}
      <MyVerticallyCenteredModal
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CustomizedImage;
