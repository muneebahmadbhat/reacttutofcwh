import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase!", "success ");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase!", "success ");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("All texts are cleared!", "success ");
    }

    const Speak= ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak function enabled!", "success ");
    }


    const cancelSpeech=()=>{
        speechSynthesis.cancel()
        props.showAlert("Speak function disabled! ", " success ");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    // text = "new text"; (Wrong way to change the state)
    // setText("new text"); (Correct way to change the state)
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
    <h1>{props.heading}</h1>
<div className = "mb-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={Speak}>Speak</button>
<button type="submit" className="btn btn-danger mx-2" onClick={cancelSpeech}>Stop TTS</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p> 

{/* <p>{text.split(" ").length} word and {text.length} characters</p> */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox above to preview here"}</p>
    </div>
    </>
  )
}                               
