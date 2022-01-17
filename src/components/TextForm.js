import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClickEvent = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClickEvent = () => {
        setText(text.toLowerCase());
    }

    const handleClearClickEvent = () => {
        setText('');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? '#fff' : '#212535' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? '#fff' : '#212535', color: props.mode === 'dark' ? '#fff' : '#212535' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClickEvent}>Convert to upper-case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClickEvent}>Convert to lower-case</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClickEvent}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? '#fff' : '#212535' }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Please type in something!'}</p>
            </div>
        </>
    );
}
