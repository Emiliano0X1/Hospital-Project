"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Card className="h-full text-black">
          <CardContent>
            <Typography variant="h1">Crear Receta</Typography>
            <Alert variant = "filled" severity="error" sx={{
              position: "absolute",
              bottom: 33,
              right: 375,
              display: "flex",
              gap: 1,
            }}>Completa el formulario con la informacion necesaria</Alert>       
          </CardContent>
          <Box sx={{
              position: "absolute",
              bottom: 40,
              right: 35,
              display: "flex",
              gap: 2,
            }}>
            <Button variant="contained" color="inherit">
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
