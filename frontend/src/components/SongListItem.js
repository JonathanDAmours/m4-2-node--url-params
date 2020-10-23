import React from "react";
import Styled from "styled-components";

const SongListItem = (props) => {
  const { song, rank, artist, streams, publicationDate } = props;
  return (
    <Li>
      <Wrapper>
        <Rank>
          <p className="bigText">#{rank}</p>{" "}
          <p className="smallText">({streams} streams)</p>
        </Rank>
        <Songtitle>
          <p className="songTitle">{song}</p>
          <p className="songArtist">by {artist}</p>
        </Songtitle>
        <Div>
          <PublicationDate>publication date: {publicationDate}</PublicationDate>
        </Div>
      </Wrapper>
    </Li>
  );
};

const Div = Styled.div`
display: flex;
align-content: flex-end;
`;

const Li = Styled.li`
`;

const Wrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 10px;
  margin: 10px;
`;

const Rank = Styled.div`
  & .bigText { 
    font-size: 3rem;
  }
  & .smallText {
    font-size: 1rem;
  }
`;

const Songtitle = Styled.div`
  margin-left: 30px;
  width: 60%;
  & .songTitle {
    font-size: 1.5rem;
    font-weight: bold;
  }
  & .songArtist {
    font-size: 1.3rem;
    font-style: italic;
  }
`;

const PublicationDate = Styled.div`
  margin-left: 40px;
  align-self: flex-end;
`;

export default SongListItem;
