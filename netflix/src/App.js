import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from './componentes/movieRow';

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
         <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
    </div>
  )
}