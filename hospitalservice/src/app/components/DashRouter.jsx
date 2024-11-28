import Box from "@mui/material/Box";
import UserDash from "./UserDash";
import NavButtons from "./NavButtons";
const DashRouter = () => {
  return (
    <Box className="flex flex-col justify-between bg-slate-200 border-r border-t border-slate-300 w-64">
      <Box>
      <NavButtons></NavButtons>
        </Box>  
        <Box className="p-2 border-t border-slate-300">
        <UserDash></UserDash>
      </Box>
    </Box>
    
  );
};  


export default DashRouter;

