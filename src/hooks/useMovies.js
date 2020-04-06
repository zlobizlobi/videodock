import { useEffect, useState } from 'react';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const moviesFromApi = await fetch(
          `https://cdn.jwplayer.com/v2/playlists/iG6xB42W`
        );
        const parsedMovies = await moviesFromApi.json();

        const { playlist } = parsedMovies;

        setMovies(playlist);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, []);

  return movies;
};
