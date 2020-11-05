import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TShirtLogoTextContext from "../../../context/TShirtLogoTextContext";
import Form from "react-bootstrap/Form";
function MyVerticallyCenteredModal(props) {
  const [boxes, setBoxes] = useContext(TShirtLogoTextContext);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== undefined && text !== "") {
      let box = { ...boxes };
      box.b.title = text;
      console.log(box);
      setBoxes(box);
    }
    e.target.reset();
    props.onHide();
    console.log("submitted");
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tshirt Logo Text
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Please Enter Your Desired Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text"
              onInput={handleText}
              name="text"
            />
          </Form.Group>

          <Modal.Footer style={{ borderTop: "0px" }}>
            {/* <Button onClick={props.onHide}>Close</Button> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
