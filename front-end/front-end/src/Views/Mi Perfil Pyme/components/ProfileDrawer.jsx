import React, { useState } from "react";
import { styled } from "@mui/system";
import "./ProfileDrawer.css"
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const initialProfileData = {
  name: "",
  region: "Región Metropolitana de Santiago",
  city: "Santiago",
  description: "",
  photos: [],
  revenue: 780000,
};

const regionsAndCities = {
  "Región de Arica y Parinacota": ["Arica", "Putre"],
  "Región de Tarapacá": ["Iquique", "Alto Hospicio"],
  "Región de Antofagasta": ["Antofagasta", "Calama"],
  "Región de Atacama": ["Copiapó", "Vallenar"],
  "Región de Coquimbo": ["La Serena", "Coquimbo"],
  "Región de Valparaíso": ["Valparaíso", "Viña del Mar"],
  "Región Metropolitana de Santiago": ["Santiago", "Puente Alto"],
  "Región del Libertador General Bernardo O'Higgins": [
    "Rancagua",
    "San Fernando",
  ],
  "Región del Maule": ["Talca", "Curicó"],
  "Región de Ñuble": ["Chillán", "San Carlos"],
  "Región del Biobío": ["Concepción", "Los Ángeles"],
  "Región de La Araucanía": ["Temuco", "Villarrica"],
  "Región de Los Ríos": ["Valdivia", "Río Bueno"],
  "Región de Los Lagos": ["Puerto Montt", "Osorno"],
  "Región de Aysén del General Carlos Ibáñez del Campo": [
    "Coyhaique",
    "Puerto Aysén",
  ],
  "Región de Magallanes y de la Antártica Chilena": [
    "Punta Arenas",
    "Puerto Natales",
  ],
};

const ProfileDrawer = () => {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [tempProfileData, setTempProfileData] = useState(initialProfileData);

  const toggleDrawer = (open) => () => {
    setOpen(open);
    if (open) {
      setTempProfileData(profileData); // Reset temporary data to current profile data on open
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfileData({ ...tempProfileData, [name]: value });
  };

  const handleFileChange = (e) => {
    setTempProfileData({
      ...tempProfileData,
      photos: Array.from(e.target.files),
    });
  };

  const handleSliderChange = (event, newValue) => {
    setTempProfileData({ ...tempProfileData, revenue: newValue });
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setTempProfileData({ ...tempProfileData, region, city: "" }); // Reset city when region changes
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setTempProfileData({ ...tempProfileData, city });
  };

  const handleSave = () => {
    setProfileData(tempProfileData);
    setOpen(false);
  };

  const handleDiscard = () => {
    setTempProfileData(profileData);
    setOpen(false);
  };

  const regions = Object.keys(regionsAndCities);
  const cities = tempProfileData.region
    ? regionsAndCities[tempProfileData.region]
    : [];

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleDrawer(true)}
        sx={{
          borderRadius: 10,
          backgroundColor: "#096bff",
          fontFamily: "Poppins",
        }}
      >
        Editar Perfil
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 400, p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Editar Perfil
          </Typography>
          <TextField
            label="Nombre"
            name="name"
            value={tempProfileData.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Región</InputLabel>
            <Select
              value={tempProfileData.region}
              onChange={handleRegionChange}
              label="Región"
            >
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Ciudad</InputLabel>
            <Select
              value={tempProfileData.city}
              onChange={handleCityChange}
              label="Ciudad"
              disabled={!tempProfileData.region}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Descripción de la empresa"
            name="description"
            value={tempProfileData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mb: 2 }}
          >
            Agregar Fotos
            <input type="file" hidden multiple onChange={handleFileChange} />
          </Button>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Ingresos: {tempProfileData.revenue.toLocaleString("es-CL")} CLP
          </Typography>
          <Slider
            value={tempProfileData.revenue}
            onChange={handleSliderChange}
            min={0}
            max={100000000}
            step={1000000}
            valueLabelDisplay="auto"
            marks={[
              { value: 0, label: "0 CLP" },
              { value: 25000000, label: "25M CLP" },
              { value: 50000000, label: "50M CLP" },
              { value: 75000000, label: "75M CLP" },
              { value: 100000000, label: "100M CLP" },
            ]}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="outlined" onClick={handleDiscard}>
              Descartar
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Guardar Cambios
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default ProfileDrawer;
