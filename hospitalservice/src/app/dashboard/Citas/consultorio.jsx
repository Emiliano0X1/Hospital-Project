
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const asignarConsultorio = async (id,consultorioId) => {
    try {
      console.log(id)
      const response = await fetch(`https://backend-hospital-8aqk.onrender.com/api/v1/cita/consultorio/${id}?consultorio_id=${consultorioId}`, {
          method: 'PATCH',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          credentials: 'include',
      });
  
      console.log('Response Status:', response.status);
  
      if(!response.ok){
        console.log("No funciono correctamente");

      }

    alert(`Se ha asignado el Consultorio ${consultorioId} con la cita ${id}`)

    } catch (error) {
      console.log("Error fatal en el sistema")
    }
  
  };


export default function ConsultorioSelect() {

  const [citaId,setCitaId] = React.useState(0);
  const [consultorio, setConsultorio] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setConsultorio(event.target.value);
  };

  return (
    <React.Fragment>
    <Button variant="outlined" onClick={handleClickOpen}>
      Asignar Consultorio
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
      <DialogTitle>Asignar Consultorio : I need Help</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor llene los datos que se requieren
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="citaId"
          label="Cita Id"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setCitaId(e.target.value)}

        />

        <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Consultorio</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={consultorio}
                    label="Consultorio"
                    onChange={handleChange}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
            </Select>
        </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type="submit" onClick={() => asignarConsultorio(citaId,consultorio)}>Agendar</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment> 
  );
}


