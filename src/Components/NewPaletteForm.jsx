import React, { useState, useEffect } from 'react'
import clsx from "clsx"
import { useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from "react-color"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorBox from './DraggableColorBox';




const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "white",
    color: "black"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,

  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}));

function NewPaletteForm({ addNewPalette, palettes }) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState("#505FCA");
  const [newColors, setNewColors] = useState([])
  const [colorName, setColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
   
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return newColors.every(({name}) => name.toLocaleLowerCase() !== value.toLocaleLowerCase())      
    })
    ValidatorForm.addValidationRule('sameColor', value => {
      return newColors.every(({color}) => color !== currentColor)      
    })
    ValidatorForm.addValidationRule('paletteName', value => {
      return palettes.every(({paletteName}) => paletteName !== value)      
    })
  

  })

  // ------------------- FUNCTİONS START -------------------

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
    setColorName(e.target.value);
  }

  const handleSubmit = () => {
    let color = {name: colorName, color: currentColor}
    setNewColors([...newColors, color])
    setColorName("")
  }

  const handleSave = () => {
    let newName = newPaletteName
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      emoji: "test",
      colors: newColors
    }

    addNewPalette(newPalette)
    navigate("/")
  }

  const handleSaveForm = (e) => {
    setNewPaletteName(e.target.value)
  }

  // ------------------- FUNCTİONS END -------------------

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
          <ValidatorForm onSubmit={handleSave}>
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
          
          <Button variant='contained' color='secondary' onClick={() => navigate("/")}>Go Back</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant='h4'>Create Your Palette</Typography>
        <div className="btns">
          <Button variant="contained" color="secondary">Clear Palette</Button>
          <Button variant="contained" color="primary">Random Color</Button>
        </div>
        <ChromePicker color={currentColor} onChangeComplete={newColor => setCurrentColor(newColor.hex)} />
        <ValidatorForm
          onSubmit={handleSubmit}
        >
          <TextValidator
            onChange={handleChange}
            type="text"
            value={colorName}
            validators={['isColorNameUnique', "sameColor",  "required"]}
            errorMessages={["Name already taken", "This Color Already Added", "This field is required"]}
          />
          <Button variant='contained' color="primary" type='submit' style={{ backgroundColor: currentColor }}>Add Color</Button>
        </ValidatorForm>
        

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {newColors.map(color =>
        (<DraggableColorBox
          key={color.name}
          color={color.color}
          name={color.name.toLocaleLowerCase()}
          setNewColors={setNewColors}
          newColors={newColors}
        />))}

      </main>
    </div>
  );
}

export default NewPaletteForm