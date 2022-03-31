import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


function DialogForm({handleSave, palettes}) {
    const [open, setOpen] = useState(false);
    const [newPaletteName, setNewPaletteName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule('paletteName', value => {
            return palettes.every(({ paletteName }) => paletteName !== value)
        })

    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveForm = (e) => {
        setNewPaletteName(e.target.value)
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <ValidatorForm onSubmit={() => handleSave(newPaletteName)}>
                        <TextValidator
                            onChange={handleSaveForm}
                            value={newPaletteName}
                            size="small"
                            placeholder='Enter a name'
                            validators={["required", "paletteName"]}
                            errorMessages={["Enter Palette Name", "Name already taken"]}
                        />
                        <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
                    </ValidatorForm>
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogForm