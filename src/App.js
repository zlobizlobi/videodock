import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import styled from 'styled-components';
import { Navbar, Footer, Movie, Video, Icon } from './components';
import { useMovies, useScrollLock } from './hooks';

const AppContainer = styled.div`
  min-height: 100%;
  position: relative;
`;

const Main = styled.main`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  height: calc(100vh - 140px);
  justify-content: center;
  overflow-y: scroll;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 100vw;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: flex-start;
`;

const App = () => {
  const movies = useMovies();

  const [currentMovie, setCurrentMovie] = useState(false);

  useScrollLock(currentMovie);

  console.log(currentMovie);

  return (
    <AppContainer>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <Main isMovieSelected={currentMovie}>
        {currentMovie && <Icon onClick={() => setCurrentMovie(false)} />}
        {currentMovie && <Overlay />}
        {movies.map((movie) => (
          <Movie onClick={() => setCurrentMovie(movie)} {...movie} />
        ))}
        {currentMovie && (
          <Video controls autoPlay muted>
            {currentMovie.sources.map(({ file, type, label }) => {
              if (type.includes('audio/mp4')) {
                return null;
              }
              return (
                <source
                  src={file}
                  type={type}
                  key={label && label}
                  media={label && `all and (min-width: ${label}}x)`}
                />
              );
            })}
            <source src="video.mp4" type="video/mp4" />
          </Video>
        )}
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default App;
