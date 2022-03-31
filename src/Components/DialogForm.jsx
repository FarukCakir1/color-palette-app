import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


function DialogForm({ handleSave, palettes, hideDialog }) {
    const [open, setOpen] = useState(true);
    const [stage, setStage] = useState("form")
    const [newPaletteName, setNewPaletteName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule('paletteName', value => {
            return palettes.every(({ paletteName }) => paletteName !== value)
        })

    })

    const handleSaveForm = (e) => {
        setNewPaletteName(e.target.value)
    }

    const changeStage = () => {
        setStage("emoji")

    }

    const savePalette = (emoji) => {
        handleSave(newPaletteName, emoji.native)
    }

    return (
        <div>
            <Dialog open={stage === "emoji"} onClose={hideDialog}>
                <DialogTitle>Choose An Emoji</DialogTitle>
                <Picker set='google' onSelect={savePalette} title="Choose An Emoji"/>
            </Dialog>
            <Dialog open={stage === "form"} onClose={hideDialog}>
                <DialogTitle>Choose A Palette Name</DialogTitle>
                <ValidatorForm onSubmit={changeStage}>
                    <DialogContent>
                        <DialogContentText>
                            Please choose a name for your gorgeous palette. It's should be unique
                        </DialogContentText>
                        <TextValidator
                            onChange={handleSaveForm}
                            value={newPaletteName}
                            variant="standard"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder='Enter a name'
                            validators={["required", "paletteName"]}
                            errorMessages={["Enter Palette Name", "Name already taken"]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideDialog}>Cancel</Button>
                        <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}

export default DialogForm