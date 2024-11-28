import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import {MoreVertIcon} from "@mui/icons-material/MoreVert";
import { grey } from "@mui/material/colors";
export default function UserDash() {
  return (
    <Box className="flex items-center h-16 ">
      <Box className="flex mr-3 items-center">
        <Avatar alt="rhamses" src="/rhamases.jpg"></Avatar>
      </Box>
      <Box className="flex flex-col mr-5 text-slate-950">
        <Box className=""> <Typography>Rhamses</Typography> </Box>
        <Box className="text-xs "> <Typography className="text-xs">Doctor</Typography></Box>
      </Box>
    </Box>
  );
}
