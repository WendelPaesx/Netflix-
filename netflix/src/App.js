import tmdb from "./tmdb";
import React, { useEffect, useState } from "react"
import LinhaDeFilmes from "./componentes/LinhaDeFilmes";
import './App.css'


export default () => {

    const [movieList, setMovieList]= useState([])

    
    useEffect(() => {
        const carregaTudo = async () => {
            //pegando toda a lista
            let lista = await tmdb.getHomeList()
            setMovieList(lista)
        }
        carregaTudo()
    }, []);
    return (
        <div className="page">
           <section className="listas">
            {movieList.map((item, key)=>(
                <LinhaDeFilmes 
                key={key}
                titulo={item.titulo}
                itens= {item.itens}

                />



            ))}
           </section>
        </div>
    )
}