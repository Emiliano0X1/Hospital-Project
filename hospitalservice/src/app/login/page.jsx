"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import { Button, TextField, Alert } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavButtons from "../components/NavButtons";
import { useUser }  from "../Context/contextAPI";

//On Click Function
const login = async (nombre,password) => {
  try {
    console.log(nombre)
    console.log(password)
    const response = await fetch("https://backend-hospital-8aqk.onrender.com/api/v1/usuario/login", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          nombre : nombre,
          password: password
        }),
    });

    console.log('Response Status:', response.status);

    if(!response.ok){
      const errorData = await response.json()
      console.log("No funciono correctamente", errorData);
      return 1;

    }

    else{
      const result = await response.json();
      console.log("Login Exitoso",result)
      return 0;

    }

  } catch (error) {
    console.log("Error fatal en el sistema")
    return 1;
  }

};


export default function Home() {

  const [nombre,setNombre] = useState('');
  const [password,setPassword] = useState('');


  const {userRole} = useUser();

  const router = useRouter();

  const manageLogin = async (nombre,password) => {

    const siJalo = await login(nombre,password);
    console.log(siJalo)

    if(siJalo === 1){
      alert("El usuario no existe")
    }

    else{
      console.log("Este es el nombre antes de asignarlo al userRole",nombre)
      userRole(nombre);
    
      router.push("/dashboard")
    }
}

  return (
    <Box className="bg-white flex max-h-screen h-screen">
      <Box className="m-4 bg-green-700 flex flex-col w-2/3 rounded-3xl justify-center">
        <Box className="flex flex-col items-center">
          <Typography variant="h1" className="mb-10">
            Rhamed
          </Typography>
          <Typography variant="h3">Inicio Sesión</Typography>
        </Box>
        <Box className="flex flex-col m-24 rounded-xl bg-white">
          <TextField
            label="Usuario"
            color="tertiary"
            className="m-4 rounded-xl"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          ></TextField>
          <TextField
            label="Contraseña"
            color="tertiary"
            className="m-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></TextField>
        </Box>
        <Box className="flex justify-center">
          <Button
            className="m-4 text-black bg-white"
            size="large"
            variant="contained"
            onClick={() => manageLogin(nombre,password)}
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
