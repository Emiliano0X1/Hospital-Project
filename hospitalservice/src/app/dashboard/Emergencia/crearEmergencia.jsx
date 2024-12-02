
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const agendarCita = async (nombre,edad,razonDeIngreso) => {
    try {
      console.log(nombre)
      console.log(edad)
 

      const response = await fetch("https://backend-hospital-8aqk.onrender.com/api/v1/emergencias", {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            nombre : nombre,
            edad: edad, 
            razonDeIngreso : razonDeIngreso
          }),
      });
  
      console.log('Response Status:', response.status);
  
      if(!response.ok){
        const errorData = await response.json()
        console.log("No funciono correctamente", errorData);

      }
  
      else{
        const result = await response.json();
        console.log("Se registro la cita Exitosamente",result)
  
      }
  
    } catch (error) {
      console.log("Error fatal en el sistema")
    }
  
  };


export default function FormDialogEmergency() {


  const [open, setOpen] = React.useState(false);
  const [nombre,setNombre] = useState('');
  const [edad,setEdad] = useState (0);
  const [razonDeIngreso,setRazonDeIngreso] = useState('');
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button 
        variant="outlined" 
        onClick={handleClickOpen}>
        Atender Emergencias
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
        <DialogTitle>Atender Emergencia : I want to jump froma highway</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor llene los datos que se requieren RAPIDO SE MUERE EL PACIENTE
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="nombre"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNombre(e.target.value)}

          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="edad"
            label="Edad"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setEdad(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="razonDeIngreso"
            label="Razon de Ingreso"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setRazonDeIngreso(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={() => agendarCita(nombre,edad,razonDeIngreso)}>CREAR</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
