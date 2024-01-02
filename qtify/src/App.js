import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router-dom";
import { fetchNewAlbum, fetchSongs, fetchTopAlbum } from "./components/api/api";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [searchData, setSearchData] = useState();
  const [data, setDate] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setDate((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbum);
    generateData("newAlbums", fetchNewAlbum);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
