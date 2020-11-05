import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Form from "react-bootstrap/Form";
import styles from "./MultipleImageForm.module.scss";

// styles for multiple image page
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function MultipleImageForm() {
  const [files, setFiles] = useState([]);

  // getting properties from useDropzone hook
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    inputRef,
    open,
  } = useDropzone({
    accept: "",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log("upload");
    },
    noClick: true,
    noKeyboard: true,
  });

  // removing single image
  const removeFile = (file) => () => {
    let acceptedFiles = [...files];
    console.log("removeFile...");
    acceptedFiles.splice(acceptedFiles.indexOf(file), 1);
    setFiles(acceptedFiles);
    console.log(acceptedFiles);
  };

  // removing all image
  const removeAll = () => {
    let acceptedFiles = [...files];
    console.log("removeAll...");
    acceptedFiles.length = 0;
    acceptedFiles.splice(0, acceptedFiles.length);
    inputRef.current.value = "";
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  };

  // previewing images
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const file = files.map((file) => (
    <li key={file.path} className={styles.preview_item}>
      {/* {file.path} - {file.size} bytes{" "} */}
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
      <div className={styles.preview_item_button}>
        <button onClick={removeFile(file)} className="btn btn-danger">
          Remove File
        </button>
      </div>
    </li>
  ));

  return (
    <section
      className="container"
      style={{ marginTop: "100px", textAlign: "center" }}
    >
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Form>
          <Form.Group>
            <p>Drag 'n' drop some files here</p>
            <button className="btn btn-success" type="button" onClick={open}>
              Insert Files
            </button>
          </Form.Group>
        </Form>
      </div>
      <aside>
        <ul>{file}</ul>
      </aside>
      {file.length > 0 && (
        <button className="btn btn-danger" onClick={removeAll}>
          Remove All
        </button>
      )}
    </section>
  );
}

export default MultipleImageForm;
