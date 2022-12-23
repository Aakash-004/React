import React,{useState} from 'react'

export default function Textform(props) {

    const handelUpClick = () =>{
        // console.log("Uppercase Is Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clear = () =>{
        let newText = '';
        setText(newText);
    }
    const handlecopy = ()=>{
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleextraspaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join("  "));
}
    const handelOnChange = (event) =>{
        // console.log("On Changed");
        setText(event.target.value)
    }
const [text, setText] = useState();
// text = "Extra text";  // --> worng way to change the state
// setText("Enter text"); // --> Correct way to change the state
  return (
    <>
<div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
  <div className="mb-3 my-3">
  <h3>{props.heading}</h3>
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'hwb(225deg 1% 82%)':'white',color:props.mode === 'dark'?'white':'black'}} onChange={handelOnChange} id="mybox" rows="9" placeholder = "Enter Text Here"></textarea>
  </div>
    <button type="button" className="btn btn-primary mx-2" onClick={handelUpClick} style={{backgroundColor:props.mode === 'dark'?'hwb(225deg 1% 82%)':' #0d6efd',color:props.mode === 'dark'?'white':'white'}}>Convert To Uppercase</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handelDownClick} style={{backgroundColor:props.mode === 'dark'?'hwb(225deg 1% 82%)':' #0d6efd',color:props.mode === 'dark'?'white':'white'}}>Convert To Lowercase</button>
    <button type="button" className="btn btn-primary mx-2" onClick={clear} style={{backgroundColor:props.mode === 'dark'?'hwb(225deg 1% 82%)':' #0d6efd',color:props.mode === 'dark'?'white':'white'}}>clear</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handlecopy} style={{backgroundColor:props.mode === 'dark'?'hwb(225deg 1% 82%)':' #0d6efd',color:props.mode === 'dark'?'white':'white'}}>Copy</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handleextraspaces} style={{backgroundColor:props.mode === 'dark'?'hwb(225deg 1% 82%)':' #0d6efd',color:props.mode === 'dark'?'white':'white'}}>Extra Space Remove</button>
<div className="contsiner" style={{color:props.mode === 'dark'?'white':'black'}}>
  <h2 className='my-2'>Your Text Summary:</h2>
  {/* <p> {text.split(' ').length}Wordes , {text.length}characters</p> */}
  <h2>Time To Read:</h2>
  {/* <p> {0.008 * text.split(' ').length} Wordes , {text.length}characters</p> */}
  <h2>Preview:</h2>
    {/* <p>{text.length>0?text:"Enter Something in abouve box to preview it here"}</p> */}
    <p>{text}</p>
    </div>
    </div>
    </>
  )
}
