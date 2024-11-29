import Box from "@mui/material/Box";
import UserDash from "./UserDash";
import NavButtons from "./NavButtons";
const DashRouter = () => {
  return (
    <Box className="flex flex-col justify-between bg-red-800 w-64">
      <Box>
      <NavButtons></NavButtons>
        </Box>  
        <Box className="p-2 border-white border-t-2">
        <UserDash></UserDash>
      </Box>
    </Box>
    
  );
};  


export default DashRouter;

