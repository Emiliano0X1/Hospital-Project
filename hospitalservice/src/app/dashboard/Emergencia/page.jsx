"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Paper, Typography } from "@mui/material"
import { Typography } from "@mui/material";
import { EditRoad } from "@mui/icons-material";
import CitaCard from "../../components/CitaCard";
import { useEffect, useState } from "react";
import { Button } from "@mui/material"
import EmergenciaCard from "../../components/EmergenciaCard";
import FormDialogEmergency from "../Emergencia/crearEmergencia"


export default function Home() {

  const [emergencias,setEmergencias] = useState([]);

  const fetchEmergencias = async() => {
      try{
        const response = await fetch("")
        
        if(!response.ok){
          throw new Error("Error en la obtencion de datos")
        }

        const data = await response.json();
        setEmergencias(data);
      }catch(error){
        console.log("Error fatal en el sistema", error)
      }

  };

  useEffect(() => {
    fetchEmergencias();
  },[]);


  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Paper className="h-full text-black" elevation={24}>
          <Typography variant="h1">Registrar Emergencia</Typography>
        </Paper>

        <Card className="h-full overflow-scroll text-black">
          <FormDialogEmergency></FormDialogEmergency>

          <Button
              className="mr-4 text-black bg-white"
              size="large"
              variant="contained"
              onClick={fetchEmergencias}
            >
              Refresh
            </Button>

          <CardContent>
            {emergencias.map((emergencia, index) => {
              return <EmergenciaCard key={index} emergencia={emergencia} />;
            })}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
