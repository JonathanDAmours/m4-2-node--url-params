import React, { useEffect, useState } from "react";
import Header from "./Header";
import SongList from "./SongList";

const Top50 = () => {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    // this is where we fetch the data from the server and add it to state.
    fetch("/top50")
      .then((res) => res.json())
      .then((json) => {
        setAllSongs(json.data);
      });
  }, []);

  return (
    <>
      <Header pageTitle="Top 50 Songs Streamed on Spotify" />
      <SongList songs={allSongs}></SongList>
    </>
  );
};

export default Top50;
