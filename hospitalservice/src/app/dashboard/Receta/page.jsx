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
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [especificaciones, setEspecificaciones] = useState("");

  // Función para borrar todo
  const borrarTodo = () => {
    setNombre("");
    setApellido("");
    setEspecificaciones("");
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
                  label="Nombre del Paciente"
                  variant="outlined"
                  value={nombre}  
                  onChange={(e) => setNombre(e.target.value)}  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Medicamentos"
                  variant="outlined"
                  value={apellido}  
                  onChange={(e) => setApellido(e.target.value)}  
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
          </CardContent>
          <Box sx={{display: "flex",justifyContent: "flex-end", alignItems: "center", gap: 2, padding: 2}}>
            <Alert variant = "filled" severity="error">Asegurese de completar el formulario con la informacion necesaria y correcta</Alert>       
            <Button variant="contained" color="inherit" onClick={borrarTodo} >
              BORRAR TODO
            </Button>
            <Button variant="contained" sx={{backgroundColor: "#0f6f32", "&:hover": {backgroundColor: "#19bb54",},}}>
              INGRESAR DATOS                         
            </Button>
          </Box>
        </Card>
      </Box>

      
    </Box>
  );
}
