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
  const[visible,setVisible] = useState(false);

  const fetchCitas = async() => {
      try{
        useEffect(() => {

           fetch("http://192.168.1.73:8080/api/v1/cita")
          .then((res) => {
             return res.json();
          })
          .then((data) => {
            setCitas(data);
          });
        }, []);
      } catch (error){
        console.log("Ocurrio un error en la obtencion de datos")
      }
  }

  fetchCitas();


  const showForm = () => {
      setVisible(true);
  }

  



  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Card className="h-full overflow-scroll text-black">
          <FormDialog></FormDialog>
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
