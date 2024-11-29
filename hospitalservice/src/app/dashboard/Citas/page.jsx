import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { EditRoad } from "@mui/icons-material";
import CitaCard from "../../components/CitaCard";
let citas = [
  {
    nombre: "Juan Perez",
    fecha: "12/12/2021",
    edad: 25,
    telefono: "12345678",
    consultorio: "A",
    medico: "Dr. Juan",
    motivo: "Dolor de cabeza",
  },
  {
    nombre: "Maria Perez",
    fecha: "12/12/2021",
    edad: 25,
    telefono: "12345678",
    consultorio: "A",
    medico: "Dr. Juan",
    motivo: "Dolor de cabeza",
  },
  {
    nombre: "Emiliano Perez",
    fecha: "12/12/2021",
    edad: 25,
    telefono: "12345678",
    consultorio: "A",
    medico: "Dr. Juan",
    motivo: "Dolor de cabeza",
  },
  {
    nombre: "Emiliano Perez",
    fecha: "12/12/2021",
    edad: 25,
    telefono: "12345678",
    consultorio: "A",
    medico: "Dr. Juan",
    motivo: "Dolor de cabeza",
  },
];

export default function Home() {
  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Card className="h-full overflow-scroll text-black">
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
