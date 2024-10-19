import React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ChangePictureButton = () => {
  const onChange = (info) => {
    console.log(info.fileList);
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
