import React, { useState } from "react";
import { styled } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";

const initialProfileData = {
  name: "",
  profession: "",
  about: "",
  experience: "",
  education: "",
  skills: [],
};

const ProfileDrawer = () => {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [tempProfileData, setTempProfileData] = useState(initialProfileData);
  const [newSkill, setNewSkill] = useState("");

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

  const handleSkillChange = (event, newValue) => {
    setTempProfileData({ ...tempProfileData, skills: newValue });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setTempProfileData({
        ...tempProfileData,
        skills: [...tempProfileData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (skillToDelete) => () => {
    setTempProfileData({
      ...tempProfileData,
      skills: tempProfileData.skills.filter((skill) => skill !== skillToDelete),
    });
  };

  const handleSave = () => {
    setProfileData(tempProfileData);
    setOpen(false);
  };

  const handleDiscard = () => {
    setTempProfileData(profileData);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleDrawer(true)}
        sx={{
          borderRadius: 10,
          backgroundColor: "#096bff",
          fontFamily: "Poppins",
          color: "white",
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
          <TextField
            label="Profesión"
            name="profession"
            value={tempProfileData.profession}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Acerca de"
            name="about"
            value={tempProfileData.about}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Experiencia"
            name="experience"
            value={tempProfileData.experience}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Educación"
            name="education"
            value={tempProfileData.education}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Autocomplete
            multiple
            id="skills"
            options={[]} // No initial options, user can type anything
            value={tempProfileData.skills}
            onChange={handleSkillChange}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  label={option}
                  onDelete={handleDeleteSkill(option)}
                  sx={{ m: 0.5 }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Conocimientos y aptitudes"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddSkill();
                  }
                }}
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
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
