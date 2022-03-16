import React from 'react'
import "../CSS/NavBar.css"

function NavBar({ title, emoji, setTone, setMode }) {

    const handleTone = (e) => {
        setTone(e.target.value)
    }

    const handleMode = (e) => {
        setMode(e.target.value)
    }

    return (
        <div className='NavBar'>
            <div className="title">
                <span>{title}</span>
                <span className='emoji'>{emoji}</span>
            </div>
            <div className="btn-groups">
                <button onClick={handleTone} value={"darker"}>Darker</button>
                <button onClick={handleTone} value={"dark"}>Dark</button>
                <button onClick={handleTone} value={"normal"}>Normal</button>
                <button onClick={handleTone} value={"light"}>Light</button>
                <button onClick={handleTone} value={"lighter"}>Lighter</button>
            </div>
            <div className="mode-btns">
                
                <select id="mode" onChange={handleMode}>
                    <option value="hex">HEX</option>
                    <option value="rgb">RGB</option>
                </select>
            </div>
        </div>
    )
}

export default NavBar