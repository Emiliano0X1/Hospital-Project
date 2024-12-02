"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Alert from "@mui/material/Alert";
import { Typography, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Home() {
  // Crear los estados para los campos de texto
  const [ID, setID] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [especificaciones, setEspecificaciones] = useState("");
  const [yay, setYay] = useState(false);
  
  const postReceta = async (id, medicamentos, especificaciones) => {
const response = await fetch(`https://backend-hospital-8aqk.onrender.com/api/v1/receta/${id}`, 
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      nombre: null,
      medicamentos: medicamentos,
      especificaciones: especificaciones,
    }),
  });
}
  // Función para borrar todo
  const borrarTodo = () => {
    setID("");
    setMedicamentos("");
    setEspecificaciones("");
    setYay(false);
  };

  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Card className="h-full text-black" sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "space-between", 
            height: "100%", 
            padding: 2, 
          }}>
          <CardContent>
            <Typography variant="h1">Crear Receta</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="ID del paciente"
                  variant="outlined"
                  value={ID}  
                  onChange={(e) => setID(e.target.value)}  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Medicamentos"
                  variant="outlined"
                  value={medicamentos}  
                  onChange={(e) => setMedicamentos(e.target.value)}  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Especificaciones"
                  variant="outlined"
                  multiline
                  rows={10}  
                  value={especificaciones} 
                  onChange={(e) => setEspecificaciones(e.target.value)} 
                />
              </Grid>
            </Grid>
            {yay && (
                  <Alert variant="filled" severity="success">
                    Se creó la receta correctamente!!!
                  </Alert>
                )}
          </CardContent>
          <Box sx={{display: "flex",justifyContent: "flex-end", alignItems: "center", gap: 2, padding: 2}}>
            <Alert variant = "filled" severity="error">Asegurese de completar el formulario con la informacion necesaria y correcta</Alert>       
            <Button variant="contained" color="inherit" onClick={borrarTodo} >
              BORRAR TODO
            </Button>
            <Button onClick={() => postReceta(ID, medicamentos, especificaciones) && setYay(true)} variant="contained" sx={{backgroundColor: "#0f6f32", "&:hover": {backgroundColor: "#19bb54",},}}>
              INGRESAR DATOS                         
            </Button>
          </Box>
        </Card>
      </Box>

      
    </Box>
  );
}
