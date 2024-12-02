import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import FormDialogPacienteEdit from "../dashboard/Paciente/modificarPaciente";

export default function EmergenciaCard({ index, paciente }) {
  return (
    <Box className="p-6 h-full">
      <Card className=" bg-slate-100 text-black">
        <CardContent className="flex justify-between">
          <Box>
            <Typography variant="h6">Id: {paciente.id}</Typography>
            <Typography variant="h6">Nombre del Paciente : {paciente.name}</Typography>
            <Typography variant="h6">Telefono: {paciente.telefono}</Typography>
            <Typography variant="h6">Razon de Visita : {paciente.razonDeVisita}</Typography>

          </Box>
          <Box>
            <Typography variant="h6">Acciones</Typography>
            <FormDialogPacienteEdit></FormDialogPacienteEdit>
              
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}