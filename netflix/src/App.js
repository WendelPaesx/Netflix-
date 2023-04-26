import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from './componentes/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList()
      setMovieList(list)

    }

    loadAll()
  }, [])

  return (
    <div className="page" >
      <section className="lists">
        {movieList.map((item,key)=>(
         <MovieRow/>

        ))}
      </section>
    </div>
  )
}