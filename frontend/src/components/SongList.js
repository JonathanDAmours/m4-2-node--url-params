import React from "react";
import Styled from "styled-components";
import SongListItem from "./SongListItem";

const SongList = (props) => {
  const { songs } = props;
  const allSongs = songs;
  return (
    <Ul>
      {allSongs.map((element) => {
        return (
          <SongListItem
            song={element.title}
            rank={element.rank}
            artist={element.artist}
            streams={element.streams}
            publicationDate={element.publicationDate}
            key={element.rank}
          />
        );
      })}
    </Ul>
  );
};

const Ul = Styled.ul`
`;

export default SongList;
