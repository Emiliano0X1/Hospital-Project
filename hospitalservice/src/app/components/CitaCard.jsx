import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import FormDialogDate from "../dashboard/Citas/modificarCIta";
import FormDialogDelete from "../dashboard/Citas/cancelarCita";
import ConsultorioSelect from "../dashboard/Citas/consultorio";
import { getConsultorioId } from "../dashboard/Citas/consultorio";

export default function CitaCard({ index, cita }) {

  return (
    <Box className="p-6 h-full">
      <Card className=" bg-slate-100 text-black">
        <CardContent className="flex justify-between">
          <Box>
            <Typography variant="h6">Id : {cita.id}</Typography>
            <Typography variant="h6">Nombre del solicitante : {cita.nombre}</Typography>
            <Typography variant="h6">Fecha : {cita.fecha}</Typography>
            <Typography variant="h6">Edad : {cita.edad}</Typography>
            <Typography variant="h6">Telefono : {cita.telefono}</Typography>
            <Typography variant="h6">Nombre del Medico: {cita.nombreMedico}</Typography>
            <Typography variant="h6">Consultorio: </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Acciones</Typography>
              <FormDialogDate></FormDialogDate>
              <FormDialogDelete></FormDialogDelete>
              <ConsultorioSelect></ConsultorioSelect>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
