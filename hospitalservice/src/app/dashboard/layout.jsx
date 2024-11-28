// app/about/layout.tsx
import Box from "@mui/material/Box";
import { StyledEngineProvider } from "@mui/material";
import DashHeader from "../components/DashHeader";
import DashRouter from "../components/DashRouter";

export default function AboutLayout({
  children,
}) {
  return (
     <StyledEngineProvider injectFirst>
        <Box className="max-h-screen h-screen flex flex-col">
          <DashHeader></DashHeader>
          <Box className="flex h-full w-full">
            <DashRouter></DashRouter>
            <Box className="w-full">
            {children}
            </Box>  
          </Box>
        </Box>
      </StyledEngineProvider>
  );
}
