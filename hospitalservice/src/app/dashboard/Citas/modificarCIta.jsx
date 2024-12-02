
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const modificarCita = async (id,fecha) => {
    try {
      console.log(fecha)
      const response = await fetch(`https://backend-hospital-8aqk.onrender.com/api/v1/cita/${id}?fecha=${fecha}`, {
          method: 'PATCH',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          credentials: 'include',
      });
  
      console.log('Response Status:', response.status);
  
      if(!response.ok){
        const errorData = await response.json()
        console.log("No funciono correctamente", errorData);

      }
      
        const result = await response.json();
        console.log("Se registro la cita Exitsamente",result)

  
    } catch (error) {
      console.log("Error fatal en el sistema")
    }
  
  };


export default function FormDialogDate() {

  const [open, setOpen] = React.useState(false);
  const [citaId,setCitaId] = useState(0);
  const [fecha,setFecha] = useState('');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button 
        variant="contained"
        className=" text-black bg-white"
        size="large"
        onClick={handleClickOpen}>
        Modificar Fecha
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Modificar Cita : DATE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese la nueva fecha de la cita
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="id-cita"
            label="Cita-ID"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setCitaId(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="fecha"
            label="Fecha"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setFecha(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={() => modificarCita(citaId,fecha)}>Modificar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
