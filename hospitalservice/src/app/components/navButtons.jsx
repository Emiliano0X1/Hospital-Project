import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import { ListItem } from "@mui/material/ListItem";
import { ListItemIcon } from "@mui/material/ListItemIcon";
import { ListItemText } from "@mui/material/ListItemText";
import { List } from "@mui/material/List";
import { ListItemButton } from "@mui/material/ListItemButton";
import { ImageIcon } from "@mui/icons-material/Image";

let buttons = [
  { text: "Pacientes", route: "/", icon: <ImageIcon /> },
  { text: "Citas", route: "/cut", icon: <ImageIcon /> },
];

export default function NavButtons() {
  return (
    <Box className="w-full h-full p-2 rounded-lg">
      <Stack>
        <List dense>
          {buttons.map((button, index) => {
            return (
              <ListItemButton className="rounded-lg flex" key={index}>
                <Button className="h-full w-full m-0 p-0" href={button.route}>
                  <ListItemIcon>{button.icon}</ListItemIcon>
                  <ListItemText className="text-black" primary={button.text} />
                </Button>
              </ListItemButton>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
}
