
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const agendarCita = async (nombre,fecha,edad,telefono,nombreMedico) => {
    try {
      console.log(nombre)
      console.log(fecha)
      console.log(telefono)
      console.log(edad)
      console.log(nombreMedico)

      const response = await fetch("", {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            nombre : nombre,
            fecha: fecha,
            edad: edad, 
            telefono : telefono,
            nombreMedico : nombreMedico
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


export default function FormDialog() {


  const [open, setOpen] = React.useState(false);
  const [nombre,setNombre] = useState('');
  const [fecha,setFecha] = useState('');
  const [edad,setEdad] = useState (0);
  const [telefono,setTelefono] = useState('');
  const [nombreMedico,setNombreMedico] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agendar Cita
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
        <DialogTitle>Agendar Cita : DAY ONE</DialogTitle>
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
            name="fecha"
            label="Fecha"
            type="text"
            fullWidth
            variant="standard"
            onChange = {(e) => setFecha(e.target.value)}
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
            name="nombreMedico"
            label="Nombre del Medico"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNombreMedico(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={() => agendarCita(nombre,fecha,edad,telefono,nombreMedico)}>Agendar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
