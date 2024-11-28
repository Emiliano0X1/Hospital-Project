import Box from "@mui/material/Box";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className="bg-white flex max-h-screen h-screen">
      <Box className="m-4 bg-red-700 flex flex-col w-2/3 rounded-3xl justify-center">
        <Box className="flex flex-col items-center">
          <Typography variant="h1" className="mb-10">Rhamed</Typography>
          <Typography variant="h3">Inicio Sesión</Typography>

        </Box>
        <Box className="flex flex-col m-24 rounded-xl bg-white">
          <TextField
            label="Usuario"
            color="tertiary"
            className="m-4 rounded-xl"
          ></TextField>
          <TextField label="Contraseña" color="tertiary"className="m-4"></TextField>
        </Box>
        <Box className="flex justify-center">
          <Button
            className="m-4 text-black bg-white"
            size="large"
            variant="contained"
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
      <Box className="rounded-3xl m-4 bg-white flex relative w-2/5 max-h-full max-w-full overflow-hidden">
        <Image
          src="/rhamsquat.jpg"
          alt="Paramedic"
          objectFit="cover"
          layout="fill"
        />
      </Box>
    </Box>
  );
}
