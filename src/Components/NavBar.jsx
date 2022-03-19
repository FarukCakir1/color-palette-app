import React, { useState } from 'react'
import "../CSS/NavBar.css"
import { Select, MenuItem, Snackbar, IconButton, Alert } from '@mui/material';




function NavBar({ title, emoji, setTone, setMode, mode }) {

    const [open, setOpen] = useState(false);

    const handleTone = (e) => {
        setTone(e.target.value)
    }

    const handleMode = (e) => {
        setMode(e.target.value)
    }

    const handleClose = (e) => {
        setOpen(false)
    }

    const handleOpen = (e) => {
        setOpen(true)
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
                <Select
                    size='small'
                    id='select-mode'
                    value={mode}
                    onChange={handleMode}
                >
                    <MenuItem onClick={handleOpen} value={"hex"}>hex(#a3cb38)</MenuItem>
                    <MenuItem onClick={handleOpen} value={"rgb"}>rgb(18,137,167)</MenuItem>
                </Select>
            </div>
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity={'info'} sx={{width: "100%"}}>
                    Mode changed to {mode}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default NavBar