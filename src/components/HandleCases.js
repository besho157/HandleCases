import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
export default function HandleUpperCase() {
  const [text, settext] = useState("");
  const textHadler = (e) => {
    settext(e.target.value);
  };

  const UpperCase = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const LowerCase = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };

  const kebabcase = () => {
    let newText = text.replaceAll(" ", "-");
    settext(newText);
  };

  const Snakecase = () => {
    let newText = text.replaceAll(" ", "_");
    settext(newText);
  };

  const Capitalize = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    settext(newText);
  };

  const copyToClipboard = () => {
    let copyText = document.getElementById("textarea").value;
    navigator.clipboard.writeText(copyText).then(() => {});
  };

  const clear = () => {
    document.getElementById("textarea").value = "";
  };

  const clearExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim()
    settext(newText);
  };
  return (
    <div>
      <textarea
        rows="3"
        className=" w-75 p-3 mt-5"
        id="textarea"
        placeholder="enter text here"
        value={text}
        onChange={textHadler}
      />
      <Col className=" justify-content-center ">
        <Button variant="outline-primary" onClick={UpperCase}>
          UpperCase
        </Button>{" "}
        <Button variant="outline-secondary" onClick={LowerCase}>
          LowerCase
        </Button>{" "}
        <Button variant="outline-success" onClick={kebabcase}>
          kebabcase
        </Button>{" "}
        <Button variant="outline-warning" onClick={Snakecase}>
          Snakecase
        </Button>{" "}
        <Button variant="outline-danger" onClick={Capitalize}>
          Capitalize
        </Button>{" "}
        <Button variant="outline-info" onClick={copyToClipboard}>
          CopyToClipboard
        </Button>{" "}
        <Button variant="outline-dark" onClick={clear}>
          Clear
        </Button>{" "}
        <Button variant="outline-dark" onClick={clearExtraSpaces}>
        clearExtraSpaces
        </Button>{" "}
      </Col>
    </div>
  );
}
