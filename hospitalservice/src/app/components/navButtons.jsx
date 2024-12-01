import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import MedicationIcon from "@mui/icons-material/Medication";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


let buttons = [
  {
    text: "Pacientes",
    route: "/dashboard/Paciente",
    icon: <AccessibilityNewIcon />,
  },
  {
    text: "Expedientes",
    route: "/dashboard/Expediente",
    icon: <ArticleIcon />,
  },
  {
    text: "Recetas",
    route: "/dashboard/Receta",
    icon: <MedicationIcon />,
  },
  {
    text: "Registros de emergencia",
    route: "/dashboard/Emergencia",
    icon: <LocalHospitalIcon />,
  },
  {
    text: "Citas",
    route: "/dashboard/Citas",
    icon: <AssignmentIndIcon />,
  },
];

export default function NavButtons() {
  return (
    <Box className="w-full h-full p-2 rounded-lg text-white">
      <Stack>
        <List className="" dense>
          {buttons.map((button, index) => {
            return (
              <ListItemButton
                component={Link}
                href={button.route}
                className="rounded-lg flex"
                key={index}
              >
                <ListItemIcon>{button.icon}</ListItemIcon>
                <ListItemText primary={button.text} />
              </ListItemButton>
            );
          })}
          <Link href="/dashboard"></Link>
        </List>
      </Stack>
    </Box>
  );
}
