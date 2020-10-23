import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import SongList from "./SongList";

const ArtistPage = () => {
  const { artist } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`/top50/artist/${artist}`)
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  return (
    <>
      <Header pageTitle={`Songs by ${artist}`} />
      <SongList songs={songs} />
    </>
  );
};

export default ArtistPage;
