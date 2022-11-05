import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Text has been converted to Upper  case!");
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    // console.log("I am clicked");
    setText(newText);
    props.showAlert("success", "Text has been converted to lower case!");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra Space has been deleted!!");
  };
  const handleCopy = () => {
    var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("success", "Copied to Clipboard!");
  };
  const handleCpclick = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      let word = newText[i].toLowerCase();
      newText[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    setText(newText.join(" "));
    props.showAlert("success", "Text has been Capitilize! ");
  };
  const handleCLclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("success", "Text has been Clear!! ");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className="form-control"
            id="my-box"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCLclick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCpclick}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} character
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Required to read
        </p>
        <h2>Preview</h2>
        <p>{text === "" ? "Enter somethings" : text}</p>
      </div>
    </>
  );
}
