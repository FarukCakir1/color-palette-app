import { useState, useEffect } from 'react'
import clsx from "clsx"
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DialogForm from './DialogForm';


function CreatePaletteNav({ classes, palettes, open, handleDrawerOpen, handleSave }) {
    // const [newPaletteName, setNewPaletteName] = useState("");
    const navigate = useNavigate()


    // useEffect(() => {
    //     ValidatorForm.addValidationRule('paletteName', value => {
    //         return palettes.every(({ paletteName }) => paletteName !== value)
    //     })

    // })


    // const handleSaveForm = (e) => {
    //     setNewPaletteName(e.target.value)
    // }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Create New Palette
                    </Typography>

                </Toolbar>
                <div className={classes.navBtns}>
                    {/* <ValidatorForm onSubmit={() => handleSave(newPaletteName)}>
                        <TextValidator
                            onChange={handleSaveForm}
                            value={newPaletteName}
                            size="small"
                            placeholder='Enter a name'
                            validators={["required", "paletteName"]}
                            errorMessages={["Enter Palette Name", "Name already taken"]}
                        />
                        <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
                    </ValidatorForm> */}
                    <DialogForm handleSave={handleSave} palettes={palettes} />

                    <Button variant='contained' color='secondary' onClick={() => navigate("/")}>Go Back</Button>
                </div>

            </AppBar>
        </div>
    )
}

export default CreatePaletteNav;