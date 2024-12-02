import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import {MoreVertIcon} from "@mui/icons-material/MoreVert";
import { grey } from "@mui/material/colors";
import { useUser } from "../Context/contextAPI";
export default function UserDash({datos}) {

  const usuario = useUser();

  return (
    <Box className="flex items-center h-16 bg-green-300">
      <Box className="flex mr-3 items-center">
      </Box>
      <Box className="flex flex-col mr-5 text-slate-950">
        <Box className="text-black"> <Typography>Rhamses</Typography> </Box>
        <Box className="text-black text-xs "> <Typography className="text-xs">{usuario.user}</Typography></Box>
      </Box>
    </Box>
  );
}
