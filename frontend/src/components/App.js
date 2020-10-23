import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Top50 from "./Top50";
import SongPage from "./SongPage";
import PopularArtistPage from "./PopularArtistPage";
import ArtistPage from "./ArtistPage";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/top50">
            <Top50 />
          </Route>
          <Route exact path="/top50/song/:id">
            <SongPage />
          </Route>
          <Route exact path="/top50/artist/:artist">
            <ArtistPage />
          </Route>
          <Route exact path="/top50/popular-artist">
            <PopularArtistPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
