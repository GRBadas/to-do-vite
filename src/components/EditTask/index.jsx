/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTaskDialog({open, dialogHandler, task, editTask}) {
    const [editedTitle, setEditedTitle] = useState(task.title)

    const titleHandler = () => {
        editTask(task.id, editedTitle)
        dialogHandler()
    }

    return (
        <Dialog
        open={open}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editar tarefa"}</DialogTitle>
        <DialogContent>
          <TextField 
          fullWidth 
          defaultValue={editedTitle} 
          onChange={(e) => setEditedTitle(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={titleHandler}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    )
}