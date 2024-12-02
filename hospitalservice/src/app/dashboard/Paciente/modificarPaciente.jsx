
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const modificarPaciente = async (id,nombre,telefono,razonDeVisita) => {
    try {
      console.log(id)
      console.log(nombre)
      console.log(telefono)
      console.log(razonDeVisita)
      const response = await fetch(`https://backend-hospital-8aqk.onrender.com/api/v1/paciente/change/${id}?nombre=${nombre}&razonDeVisita=${telefono}&telefono=${razonDeVisita}`, {
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


export default function FormDialogPacienteEdit() {

  const [open, setOpen] = React.useState(false);
  const [pacienteId,setPacienteId] = useState(0);
  const [nombre,setNombre] = useState('');
  const [telefono,setTelefono] = useState('');
  const [razonDeVisita,setRazonDeVisita] = useState('');


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
        Modificar Paciente
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
        <DialogTitle>Modificar Paciente : I want to Sleep</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese la nueva informacion del paciente
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="id-paciente"
            label="Paciente-ID"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setPacienteId(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setNombre(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="telefono"
            label="Telefono"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setTelefono(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="razonDeVisita"
            label="Razon de Visita"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setRazonDeVisita(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={() => modificarPaciente(pacienteId,nombre,telefono,razonDeVisita)}>Modificar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
