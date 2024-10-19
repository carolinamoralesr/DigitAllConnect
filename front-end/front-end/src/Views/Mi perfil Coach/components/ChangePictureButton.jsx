import React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const ChangePictureButton = ({ coachId }) => {
  const onChange = (info) => {
    console.log(info.fileList);
    // Aquí puedes manejar la lógica para subir la imagen al servidor si es necesario
  };

  const uploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: onChange,
    multiple: false,
  };

  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>Cambiar Foto de Perfil</Button>
    </Upload>
  );
};

export default ChangePictureButton;
