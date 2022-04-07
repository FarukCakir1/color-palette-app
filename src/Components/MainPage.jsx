import React, { useState } from 'react'
import MiniPalette from './MiniPalette'
import Dialog from '@mui/material/Dialog';
import { Check, Close } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"
import { withStyles } from "@mui/styles"
import { useNavigate, Link } from "react-router-dom"
import styles from "../styles/MainPageStyles"

function MainPage({ classes, palettes, deletePalette}) {

    const { root, container, nav, palette } = classes;

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [deletingId, setDeletingId] = useState("")
    const goToPalette = (id) => {
        navigate(`/palette/${id}`)
    }

    const openDialog = (id) => {
        setOpen(true)
        setDeletingId(id)
    }

    const closeDialog = () => {
        setOpen(false)
        setDeletingId("")
    }

    const handleDelete = () => {
        deletePalette(deletingId)
        setOpen(false)
        setDeletingId("")
    }
    return (
        <div className={root}>
            <div className={container}>
                <div className={nav}>
                    <h4>Color Palette App</h4>
                    <Link to="/palette/new">Create Palette</Link>
                </div>
                <div className={palette}>
                    {palettes.map(palette => (
                        <MiniPalette 
                            key={palette.id} 
                            {...palette} 
                            goToPalette={() => {goToPalette(palette.id)}} 
                            // deletePalette={deletePalette}
                            openDialog={openDialog}
                        />
                    ))}
                </div>
            </div>
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>Delete Palette ?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[700]}}>
                                <Check />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete"/>
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[700]}}>
                                <Close />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel"/>
                    </ListItem>
                </List>           
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(MainPage)