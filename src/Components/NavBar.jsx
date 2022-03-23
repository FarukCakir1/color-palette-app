import React, { useState } from 'react'
import { Select, MenuItem, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { withStyles } from "@mui/styles"
import styles from "../styles/NavBarStyle"
 



function NavBar({setTone, setMode, mode, tone, displayTone, classes }) {

    const {NavBar, leftSide, title, btnGroups, modeBtns} = classes;
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
        <div className={NavBar}>
            <div className={leftSide}>
                <Link className={title} to="/">
                    <h3>Color Palettes</h3>
                </Link>
                {displayTone && (
                    <div className={btnGroups}>
                        <Select
                            size='big'
                            sx={{ width: 200, height: 35, marginLeft: 5 }}
                            value={tone}
                            onChange={handleTone}
                        >
                            <MenuItem value={"darker"}>Darker</MenuItem>
                            <MenuItem value={"dark"}>Dark</MenuItem>
                            <MenuItem value={"normal"}>Normal</MenuItem>
                            <MenuItem value={"light"}>Light</MenuItem>
                            <MenuItem value={"lighter"}>Lighter</MenuItem>
                        </Select>
                    </div>
                )}
            </div>
            <div className={modeBtns}>
                <Select
                    sx={{ width: 200, height: 35 }}
                    size="small"
                    id='select-mode'
                    value={mode}
                    onChange={handleMode}
                >
                    <MenuItem onClick={handleOpen} value={"hex"}>hex(#a3cb38)</MenuItem>
                    <MenuItem onClick={handleOpen} value={"rgb"}>rgb(18,137,167)</MenuItem>
                </Select>
            </div>
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity={'info'} sx={{ width: "100%" }}>
                    Mode changed to {mode}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default withStyles(styles) (NavBar)