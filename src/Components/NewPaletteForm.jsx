import { useState, useEffect } from 'react'
import clsx from "clsx"
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from "react-color"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableBoxList from './DraggableBoxList';
import { arrayMove } from 'react-sortable-hoc';
import CreatePaletteNav from './CreatePaletteNav';


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

  const codesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"]
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState("#505FCA");
  const [newColors, setNewColors] = useState([])
  const [colorName, setColorName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
   
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return newColors.every(({name}) => name.toLocaleLowerCase() !== value.toLocaleLowerCase())      
    })
    ValidatorForm.addValidationRule('sameColor', value => {
      return newColors.every(({color}) => color !== currentColor)      
    })

  })

  // ------------------- FUNCTİONS START -------------------

  const handleDrawerOpen = () => {
    setOpen(!open);
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

  const handleSave = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "test",
      colors: newColors
    }

    addNewPalette(newPalette)
    navigate("/")
  }

  const handleClear = () => {
    setNewColors([])
  }

  const randomColor = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++){
      const rand = Math.floor(Math.random() * codesArr.length)
      const randCode = codesArr[rand]
      hexCode += randCode; 
    }
    setCurrentColor(hexCode)
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setNewColors(arrayMove(newColors, oldIndex, newIndex))
  };

  // ------------------- FUNCTİONS END -------------------

  return (
    <div className={classes.root}>
      <CreatePaletteNav
        classes={classes} 
        open={open} 
        handleDrawerOpen={handleDrawerOpen}
        handleSave={handleSave}
        palettes={palettes}
      />
      
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
          <Button variant="contained" color="secondary" onClick={handleClear}>Clear Palette</Button>
          <Button variant="contained" color="primary" onClick={randomColor}>Random Color</Button>
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
        <DraggableBoxList newColors={newColors} setNewColors={setNewColors} axis="xy" onSortEnd={onSortEnd}/>
        

      </main>
    </div>
  );
}

export default NewPaletteForm