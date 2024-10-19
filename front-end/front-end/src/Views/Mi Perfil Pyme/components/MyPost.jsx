import React, { useState } from "react"; //volver
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
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "20px auto",
  padding: theme.spacing(2),
  backgroundColor: "#ffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontFamily: "Poppins",
  borderRadius: "30px",
  width: "700px",
  maxWidth: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#096bff",
  borderRadius: "30px",
  fontFamily: "Poppins",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#115293",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  
  
}));

const StyledComment = styled(ListItem)(({ theme }) => ({
  backgroundColor: "#e3f2fd",
  marginBottom: theme.spacing(1),
  borderRadius: "30px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const MyPost = ({ post, pymeId, onPostCreated }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCreatePost = () => {
    if (title.trim() && content.trim()) {
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, pymeId }),
      })
        .then((res) => res.json())
        .then((data) => {
          onPostCreated(data.data);
          setTitle("");
          setContent("");
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  if (!post) {
    // Modo de creación de post
    return (
      <Grid className="MyPost">
        <StyledCard>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", fontFamily: "Poppins", mb: 2 }}
            >
              Crear nuevo post
            </Typography>
            <StyledTextField
              label="Título"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
            />
            <StyledTextField
              label="Contenido"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              sx={{ mb: 2 }}
            />
            <StyledButton
              variant="contained"
              onClick={handleCreatePost}
              sx={{ fontFamily: "Poppins" }}
            >
              Crear Post
            </StyledButton>
          </CardContent>
        </StyledCard>
      </Grid>
    );
  }

  // Modo de visualización de post
  return (
    <Grid className="MyPost">
      <Grid>
        <StyledCard>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, fontFamily: "Poppins" }}
            >
              {post.content}
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default MyPost;