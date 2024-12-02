import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Card className="h-full text-black">
          <CardContent>
            <Typography variant="h1">Crear expediente</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
