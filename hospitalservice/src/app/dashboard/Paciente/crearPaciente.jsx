
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const crearPaciente = async (nombre,telefono,razonDeVisita,citaId) => {
    try {
      console.log(nombre)
      console.log(telefono)

      const response = await fetch(`https://backend-hospital-8aqk.onrender.com/api/v1/paciente/${citaId}`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            name : nombre,
            telefono : telefono,
            razonDeVisita : razonDeVisita
          }),
      });
  
      console.log('Response Status:', response.status);
  
      if(!response.ok){
        const errorData = await response.json()
        console.log("No funciono correctamente", errorData);

      }
  
      else{
        const result = await response.json();
        console.log("Se creo al Paciente Exitosamente",result)
  
      }
  
    } catch (error) {
      console.log("Error fatal en el sistema")
    }
  
  };


export default function FormDialogPaciente() {


  const [open, setOpen] = React.useState(false);

  const [nombre,setNombre] = useState('');
  const [telefono,setTelefono] = useState('');
  const [razonDeVisita,setRazonDeVisita] = useState('');
  const [citaId,setCitaId] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear Paciente
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
        <DialogTitle>Crear Paciente : DAY ONE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor llene los datos que se requieren
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
            name="telefono"
            label="Telefono"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTelefono(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="razonDeVisita"
            label="Razon De Visita"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setRazonDeVisita(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="cita_id"
            label="Cita Id"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCitaId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={() => crearPaciente(nombre,telefono,razonDeVisita,citaId)}>Crear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
