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
import ConsultorioSelectEme from "../dashboard/Emergencia/consultorioEmergencia"

export default function EmergenciaCard({ index, emergencia }) {
  return (
    <Box className="p-6 h-full">
      <Card className=" bg-slate-100 text-black">
        <CardContent className="flex justify-between">
          <Box>
            <Typography variant="h6">Id: {emergencia.id}</Typography>
            <Typography variant="h6">Nombre del solicitante : {emergencia.nombre}</Typography>
            <Typography variant="h6">Edad : {emergencia.edad}</Typography>
            <Typography variant="h6">Razon de Ingreso : {emergencia.razonDeIngreso}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Acciones</Typography>
              <ConsultorioSelectEme></ConsultorioSelectEme>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
