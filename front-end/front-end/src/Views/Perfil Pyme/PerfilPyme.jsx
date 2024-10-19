
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./PerfilPyme.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import CompanyInfo from "./components/CompanyInfo";
import IncomeInfo from "./components/IncomeInfo";
import MorePhotos from "./components/MorePhotos";
import SimilarStores from "./components/SimilarStores";
import MyPost from "./components/MyPost";

function PerfilPyme() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const { pymeId } = useParams();

  useEffect(() => {
    fetchUserData();
    fetchPosts();
  }, [pymeId]);

  const fetchUserData = () => {
    fetch(`http://localhost:3000/api/users/pyme/${pymeId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
        setError("No se pudieron cargar los datos del usuario");
      });
  };

  const fetchPosts = () => {
    fetch(`http://localhost:3000/api/posts/pyme/${pymeId}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los posts:", error);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="app2 profile-containerPyme2">
      <Header />

      <CompanyInfo userData={userData} />
      {posts.length > 0 ? (
        <MyPost post={posts[0]} pymeId={pymeId} />
      ) : (
        <div>No hay posts disponibles</div>
      )}
      <IncomeInfo />
      <MorePhotos />
      <SimilarStores />
      <Buttons />
    </div>
  );
}

export default PerfilPyme;
