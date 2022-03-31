import { useState, useEffect } from 'react'
import clsx from "clsx"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from "react-color"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from "../styles/ColorPickerStyles"


function ColorPicker( { classes, isPaletteFull, handleSubmit, currentColor, setCurrentColor, newColors } ) {
    const [colorName, setColorName] = useState("");

    useEffect(() => {
   
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
          return newColors.every(({name}) => name.toLocaleLowerCase() !== value.toLocaleLowerCase())      
        })
        ValidatorForm.addValidationRule('sameColor', value => {
          return newColors.every(({color}) => color !== currentColor)      
        })
    
      })

    const handleChange = (e) => {
        setColorName(e.target.value);
    }


    return (
        <div className={classes.root}>
            <ChromePicker 
                className={classes.picker}
                color={currentColor} 
                onChangeComplete={newColor => setCurrentColor(newColor.hex)} 
            />
            <ValidatorForm
                onSubmit={() => {
                    handleSubmit(colorName, currentColor)
                    setColorName("")
                }}
            >
                <TextValidator
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    type="text"
                    value={colorName}
                    validators={['isColorNameUnique', "sameColor", "required"]}
                    errorMessages={["Name already taken", "This Color Already Added", "This field is required"]}
                />
                <Button
                    variant='contained'
                    color="primary"
                    type='submit'
                    style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
                    disabled={isPaletteFull}
                    className={classes.button}
                >{isPaletteFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default withStyles(styles) (ColorPicker);