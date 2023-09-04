import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase " + text);
    let a = text.toUpperCase();
    setText(a);
  };

  const handleLoClick = () => {
    console.log("Lowercase " + text);
    let a = text.toLowerCase();
    setText(a);
  };

  const handleClearClick = () => {
    let a = "";
    setText(a);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCapitalizeClick = () => {
    let a = text[0].toUpperCase()+text.slice(1).toLowerCase();
    setText(a)

  };


  const [text, setText] = useState("Enter text here");
  // setText('new text');
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>
          Capitalize Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.length} characters</p>
        <p>You can read the above text in {0.008*text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
        {/* <h2>Save the text</h2>
        <p>{text}</p> */}
      </div>
        
    </>
  );
}
