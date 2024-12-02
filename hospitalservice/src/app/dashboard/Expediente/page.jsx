"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Paper, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";



const crearExpediente = async (id, expediente) => {
  try {
    const response = await fetch(
      `https://backend-hospital-8aqk.onrender.com/api/v1/expediente/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expediente: expediente,
        }),
      }
    );

    // Verificar el estado de la respuesta
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al crear el expediente:", errorData);
      alert("Hubo un error al crear el expediente. Intenta nuevamente.");
      return;
    }

    const result = await response.json();
    console.log("Expediente creado exitosamente:", result);
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

export default function Expediente() {
  const fetchExpediente = async (data) => {
    if (data.expediente != null) {
      alert("El expediente ya existe");
      showButtons(true);
      showNuevoExpediente(false);
      setExpediente(data.expediente);
      return;
    } else {
      showNuevoExpediente(true);
    }
  };

  const fetchId = async (id) => {
    const response = await fetch(
      `https://backend-hospital-8aqk.onrender.com/api/v1/paciente/${id}`
    );
    if (!response.ok) {
      showNuevoExpediente(false);
      setNotFound(true);
      return;
    }
    setNotFound(false);
    const data = await response.json();
    fetchExpediente(data);
  };

  const [ID, setID] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [open, setOpen] = useState(false);
  const [expediente, setExpediente] = useState("");
  const [buttons, showButtons] = useState(false);
  const [nuevoExpediente, showNuevoExpediente] = useState(false);
  const [expedienteData, setExpedienteData] = useState(false);
  const [mostrarExpediente, setMostrarExpediente] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="bg-white w-full h-full">
      <Box className="p-6 h-full">
        <Paper className="h-full text-black" elevation={24}>
          <Box className="flex flex-col h-full p-10">
            <Box className="">
              <Typography variant="h1">Crear expediente</Typography>
              <Typography variant="h3">Ingrese el ID del paciente</Typography>
            </Box>
            <Box className=" flex w-full h-20 my-8 items-center">
              <TextField
                label="ID del paciente"
                color="tertiary"
                className=""
                onChange={(e) => setID(e.target.value)}
                value={ID}
              ></TextField>
              <Button
                className="m-4 text-black bg-white"
                size="large"
                variant="contained"
                onClick={() =>
                  fetchId(ID) &&
                  showButtons(false) &&
                  showNuevoExpediente(false)
                }
              >
                Crear
              </Button>
              {notFound && (
                <Alert variant="filled" severity="error">
                  No se encontró el id
                </Alert>
              )}
            </Box>
            {buttons && (
              <Box className="w-1/2">
                <Alert variant="filled" severity="info">
                  El expediente ya existe, desea realizar alguna acción?
                </Alert>
                <Button
                  className=" text-black bg-white"
                  size="large"
                  variant="contained"
                  onClick={() =>
                    setExpedienteData(true) && setMostrarExpediente(false)
                  }
                >
                  Actualizar Historial
                </Button>
                <Button
                  className="m-4 text-black bg-white"
                  size="large"
                  variant="contained"
                  onClick={() =>
                    setMostrarExpediente(true) && setExpedienteData(false)
                  }
                >
                  Consultar Historial
                </Button>
              </Box>
            )}
            {expedienteData && 
               (<Box>
                <Typography variant="body1">{expediente.historial}</Typography>
              </Box>)
            }

            {nuevoExpediente && (
              <Box className="w-1/2">
                <Alert variant="filled" severity="error">
                  El paciente no tiene expediente, desea crear uno?
                </Alert>
                <Button
                  className="my-4 text-black bg-white"
                  size="large"
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Crear Expediente
                </Button>
              </Box>
            )}
            {open && (
              <Box>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  fullWidth={true}
                  fullScreen={false}
                  maxWidth="sm"
                >
                  <DialogTitle>Ingrese su historial médico</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      label="Expediente"
                      type="text"
                      color="tertiary"
                      variant="filled"
                      onChange={(e) => setExpediente(e.target.value)}
                      sx={{
                        width: "100%",
                        fontSize: "1.5rem",
                        input: {
                          fontSize: "1.5rem",
                        },
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button
                      type="submit"
                      onClick={() =>
                        crearExpediente(ID, expediente) &&
                        handleClose() &&
                        showButtons(false) &&
                        showNuevoExpediente(false)
                      }
                    >
                      CREAR
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            )}
            <Box className="h-20"></Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
