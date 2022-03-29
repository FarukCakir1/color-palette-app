import { useState, useEffect } from 'react'
import clsx from "clsx"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from "react-color"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


function ColorPicker( { isPaletteFull, handleSubmit, currentColor, setCurrentColor, newColors } ) {
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
        <div>
            <ChromePicker color={currentColor} onChangeComplete={newColor => setCurrentColor(newColor.hex)} />
            <ValidatorForm
                onSubmit={() => handleSubmit(colorName, currentColor)}
            >
                <TextValidator
                    onChange={handleChange}
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
                >{isPaletteFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPicker