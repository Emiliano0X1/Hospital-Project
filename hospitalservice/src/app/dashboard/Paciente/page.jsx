"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { EditRoad } from "@mui/icons-material";
import CitaCard from "../../components/CitaCard";
import { useEffect, useState } from "react";
import { Button } from "@mui/material"
import FormDialog from "../Citas/agendarCita"

export default function Home() {

  const [pacientes,setPacientes] = useState([]);

  const fetchPaciente = async() => {
      try{
        const response = await fetch("http://192.168.1.73:8080/api/v1/paciente")
        
        if(!response.ok){
          throw new Error("Error en la obtencion de datos")
        }

        const data = await response.json();
        setPacientes(data);
      }catch(error){
        console.log("Error fatal en el sistema", error)
      }

  };

  useEffect(() => {
    fetchPaciente();
  },[]);


  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Card className="h-full overflow-scroll text-black">
          <FormDialog></FormDialog>

          <Button
              className="mr-4 text-black bg-white"
              size="large"
              variant="contained"
              onClick={fetchPaciente}
            >
              Refresh
            </Button>

          <CardContent>
            {pacientes.map((paciente, index) => {
              return <PacienteCard key={index} paciente={paciente} />;
            })}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

