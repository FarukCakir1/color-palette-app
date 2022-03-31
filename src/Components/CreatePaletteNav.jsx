import { useState } from 'react'
import clsx from "clsx"
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import DialogForm from './DialogForm';


function CreatePaletteNav({ classes, palettes, open, handleDrawerOpen, handleSave }) {
    const navigate = useNavigate();
    const [ showDialog, setShowDialog] = useState(false);

    const displayDialog = () => {
        setShowDialog(true)
    }

    const hideDialog = () => {
        setShowDialog(false)
    }

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
                    <Button className={classes.navBtn} variant='contained' color='secondary' onClick={() => navigate("/")}>Go Back</Button>
                    <Button className={classes.navBtn} variant="contained" color="primary" onClick={displayDialog}>
                        Save
                    </Button>
                </div>
            </AppBar>
            {showDialog && <DialogForm handleSave={handleSave} palettes={palettes} hideDialog={hideDialog}/>}
        </div>
    )
}

export default CreatePaletteNav;