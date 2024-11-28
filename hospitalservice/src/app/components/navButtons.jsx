import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ImageIcon from "@mui/icons-material/Image";

let buttons = [
  { text: "Pacientes", route: "/pacientes", icon: <ImageIcon /> },
  { text: "Crear expediente", route: "/crearExpediente", icon: <ImageIcon /> },
  { text: "Crear receta", route: "/crearReceta", icon: <ImageIcon /> },
  { text: "Registro de emergencia", route: "/registrarEmergencia", icon: <ImageIcon /> },
];

export default function NavButtons() {
  return (
    <Box className="w-full h-full p-2 rounded-lg  text-white">
      <Stack>
        <List dense>
          {buttons.map((button, index) => {
            return (
              <ListItemButton
                className="rounded-lg flex"
                href={button.route}
                key={index}
              >
                <ListItemIcon>{button.icon}</ListItemIcon>
                <ListItemText primary={button.text} />
              </ListItemButton>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
}
