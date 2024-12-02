import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";


export default function EmergenciaCard({ index, paciente }) {
  return (
    <Box className="p-6 h-full">
      <Card className=" bg-slate-100 text-black">
        <CardContent className="flex justify-between">
          <Box>
            <Typography variant="h6">Id: {paciente.id}</Typography>
            <Typography variant="h6">Nombre del Paciente : {paciente.nombre}</Typography>
            <Typography variant="h6">Telefono: {paciente.telefono}</Typography>
            <Typography variant="h6">Razon de Visita : {paciente.razonDeVisita}</Typography>
            <Typography variant="h6">Cita Agendada: {paciente.citas.id}</Typography>

          </Box>
          <Box>
            <Typography variant="h6">Acciones</Typography>
              
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}