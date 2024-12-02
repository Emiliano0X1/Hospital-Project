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

  const [citas,setCitas] = useState([]);

  const fetchCitas = async() => {
      try{
        const response = await fetch("https://backend-hospital-8aqk.onrender.com/api/v1/cita")
        
        if(!response.ok){
          throw new Error("Error en la obtencion de datos")
        }

        const data = await response.json();
        setCitas(data);
      }catch(error){
        console.log("Error fatal en el sistema", error)
      }

  };

  useEffect(() => {
    fetchCitas();
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
              onClick={fetchCitas}
            >
              Refresh
            </Button>

          <CardContent>
            {citas.map((cita, index) => {
              return <CitaCard key={index} cita={cita} />;
            })}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
