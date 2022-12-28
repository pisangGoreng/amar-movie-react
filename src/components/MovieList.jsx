import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/actions/movies"

export default function MovieList() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)

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
  return <div>MovieList</div>
}
