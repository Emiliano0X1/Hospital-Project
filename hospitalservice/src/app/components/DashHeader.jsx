import {Button} from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const DashHeader = () => {
  return (
    <Box className="bg-red-700 w-svw h-12">
      <Box className="flex justify-start p-3 items-center h-full">
        <Typography variant="h4">CRUZ ROJA</Typography>
      </Box>
    </Box>
  ); 
};

export default DashHeader;
