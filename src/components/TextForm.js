import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.Alertmsg("Text has been converted to Uppercase","success");

  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.Alertmsg("Text has been converted to lowercase","success");

  }
  const handleLoClear = () => {
    let newText = "";
    setText(newText);
    props.Alertmsg("Text has been clear","success");

  }
  const handlCopy = () => {
   let text=document.getElementById("box");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.Alertmsg("Text has been copied","success");

  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState(" ");
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h1>{props.title}</h1>

        <textarea className="form-control" value={text} placeholder="Leave a comment here"  onChange={handleOnChange} id="box" rows="8"></textarea>


        <button className="btn btn-primary mt-3 mb-3 me-3" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mt-3 me-2 mb-3" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mt-3 mx-2 mb-3 me-3" onClick={handleLoClear}>Clear</button>
        <button className="btn btn-primary mt-3  mb-3" onClick={handlCopy}>Copy</button>
        <h2>Text Summary</h2>
        <p>
  Words: {text.trim().split(/\s+/).filter(Boolean).length} 
  &nbsp;|&nbsp; 
  Characters: {text.length}
</p>
        <p>Reading minutes {text.split(" ").length * 0.008}</p>
        <h2> Preview </h2>
        <p>{text.length>1?text:"Enter something to preview"}</p>
      </div></div>
  )
}
