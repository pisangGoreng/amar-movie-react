import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/actions/movies"

export default function MovieList() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies)
  const loading = useSelector((state) => state.movies.loading)
  const error = useSelector((state) => state.movies.error)

  useEffect(() => {
    dispatch(
      getMovies([
        {
          id: 1,
          name: "Emmanuel",
          company: "Dusk",
          catchPhrase: "Made to fly",
        },
      ])
    )
  }, [dispatch])

  console.log("movies", movies)
  return (
    <>
      {movies.length > 0 &&
        movies.map((movie) => <p key={movie.id}>{movie.name}</p>)}
      {movies.length === 0 ? <p>No movies</p> : null}
      {movies.length === 0 && loading === true ? <p>Loading...</p> : null}
      {error === 0 && !loading === true ? <p>{error.message}</p> : null}
    </>
  )
}
