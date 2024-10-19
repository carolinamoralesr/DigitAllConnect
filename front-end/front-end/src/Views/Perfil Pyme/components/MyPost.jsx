// MyPost.jsx

import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import FaceIcon from "@mui/icons-material/Face";

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "20px auto",
  padding: theme.spacing(2),
  backgroundColor: "#ffff",
  borderRadius: "30px",
  fontFamily: "Poppins",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: "Poppins",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1877f2",
  borderRadius: "30px",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#166fe5",
    fontFamily: "Poppins",
  },
}));

const CommentContainer = styled(ListItem)(({ theme }) => ({
  backgroundColor: "#fff",
  fontFamily: "Poppins",
  marginBottom: theme.spacing(2),
  borderRadius: "10px",
  padding: theme.spacing(2),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const MyPost = ({ post }) => {
  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          text: newComment,
          createdAt: new Date(),
          coachId: "dummyCoachId", // Aquí deberías obtener el coachId real desde la sesión o el contexto
        },
      ]);
      setNewComment("");
    }
  };

  useEffect(() => {
    // Aquí puedes hacer una solicitud GET al backend para obtener los comentarios
    // y actualizar 'comments' en el estado
  }, []);

  return (
    <Grid container className="MyPost">
      <Grid>
        <StyledCard>
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "Poppins" }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ fontFamily: "Poppins" }}
            >
              {post.content}
            </Typography>
          </CardContent>
        </StyledCard>
        <Box sx={{ marginY: 2 }}>
          <StyledTextField
            label="Agregar un comentario"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={handleCommentChange}
          />
          <StyledButton
            variant="contained"
            onClick={handleAddComment}
            fullWidth
            size="large"
          >
            Comentar
          </StyledButton>
          <List>
            {comments.map((comment, index) => (
              <CommentContainer key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: grey[500] }}>
                    <FaceIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                      {/* Aquí deberías obtener el nombre del coach */}
                      Nombre del Coach
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        sx={{ fontFamily: "Poppins" }}
                      >
                        {comment.text}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ fontFamily: "Poppins" }}
                      >
                        {new Date(comment.createdAt).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </CommentContainer>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyPost;
