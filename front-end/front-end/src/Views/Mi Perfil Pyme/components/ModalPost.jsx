import React, { useState } from "react";
import { Button, TextField, Modal, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const ModalPost = ({ pymeId, onPostCreated }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, pymeId }),
    })
      .then((res) => res.json())
      .then((result) => {
        onPostCreated(result.data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          borderRadius: 10,
          backgroundColor: "#096bff",
          fontFamily: "Poppins",
        }}
      >
        Crear Nueva Solicitud
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 10,
            boxShadow: 24,
            p: 4,
            width: "80%",
            maxWidth: 600,
            fontFamily: "Poppins, Arial, sans-serif",
            margin: "auto",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontFamily: "Poppins" }}>
            Crea una nueva solicitud para tu pyme
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              rules={{ required: "Debes llenar el título de tu solicitud" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Título"
                  fullWidth
                  variant="outlined"
                  error={!!errors.title}
                  helperText={errors.title ? errors.title.message : null}
                  sx={{ mb: 2, fontFamily: "Poppins" }}
                />
              )}
            />
            <Controller
              name="content"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Descripción"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2, fontFamily: "Poppins" }}
            >
              Crear
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ mr: 2, fontFamily: "Poppins" }}
            >
              Cancelar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ModalPost;
