import tmdb from "./tmdb";
import React, { useEffect } from "react"


export default () => {
    useEffect(() => {
        const carregaTudo = async () => {
            //pegando toda a lista
            let lista = await tmdb.getHomeList()
            console.log(lista);
        }
        carregaTudo()
    }, []);
    return (
        <div>
            Ola Mundo
        </div>
    )
}