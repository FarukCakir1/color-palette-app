import { useState } from 'react'
import clsx from "clsx"
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableBoxList from './DraggableBoxList';
import { arrayMove } from 'react-sortable-hoc';
import CreatePaletteNav from './CreatePaletteNav';
import ColorPicker from './ColorPicker';


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
    color: "black",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    justifyContent: "space-between"
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

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
  navBtns: {
    display: "flex",
    alignItems: "center",
    "& button": {
      height: "2rem"
    },
    marginRight: "1rem"
  },
  navBtn: {
    margin: "0 0.3rem"
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  btns: {
    width: "90%",
    marginRight: "1rem"
  },
  btn: {
    width: "50%",
    fontSize: ".7rem"
  }

}));

function NewPaletteForm({ addNewPalette, palettes }) {

  const codesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"]
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState("#505FCA");
  const [newColors, setNewColors] = useState([])
  const navigate = useNavigate();
  const isPaletteFull = newColors.length === 20

  // ------------------- FUNCTİONS START -------------------

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (colorName, currentColor) => {
    let color = { name: colorName, color: currentColor }
    setNewColors([...newColors, color])
  }

  const handleSave = (newPaletteName, emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji,
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
    for (let i = 0; i < 6; i++) {
      const rand = Math.floor(Math.random() * codesArr.length)
      const randCode = codesArr[rand]
      hexCode += randCode;
    }
    setCurrentColor(hexCode)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
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
        <div className={classes.container}>
          <Typography variant='h5' gutterBottom>Create Your Palette</Typography>
          <div className={classes.btns}>
            <Button variant="contained" className={classes.btn} color="secondary" onClick={handleClear}>Clear Palette</Button>
            <Button variant="contained" className={classes.btn} color="primary" onClick={randomColor}>Random Color</Button>
          </div>
          <ColorPicker
            isPaletteFull={isPaletteFull}
            handleSubmit={handleSubmit}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            newColors={newColors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableBoxList newColors={newColors} setNewColors={setNewColors} axis="xy" onSortEnd={onSortEnd} />


      </main>
    </div>
  );
}

export default NewPaletteForm