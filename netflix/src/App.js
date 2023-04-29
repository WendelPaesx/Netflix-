import tmdb from "./tmdb";
import React, { useEffect, useState } from "react"
import LinhaDeFilmes from "./componentes/LinhaDeFilmes";
import './App.css'
import FilmeDestaque from "./componentes/FilmeDestaque";


export default () => {

    const [movieList, setMovieList] = useState([])
    const [dadosDestaque, setDadosDestaque] = useState(null)


    useEffect(() => {
        const carregaTudo = async () => {
            //pegando toda a lista
            let lista = await tmdb.getHomeList()
            setMovieList(lista)

            //pegando o feature
            let acao = lista.filter(i => i.slug === 'acao')
            let sorteio = Math.floor(Math.random() * (acao[0].itens.results.length - 1))
            let escolhido = acao[0].itens.results[sorteio]
            let infoEscolhido = await tmdb.getInfoFilme(escolhido.id, 'movie')

            setDadosDestaque(infoEscolhido)
            console.log(infoEscolhido);
            console.log(infoEscolhido.overview);


        }
        carregaTudo()
    }, []);
    return (
        <div className="page">

            {dadosDestaque &&
                <FilmeDestaque
                    item={dadosDestaque}

                />}




            <section className="listas">
                {movieList.map((item, key) => (
                    <LinhaDeFilmes
                        key={key}
                        titulo={item.titulo}
                        itens={item.itens}

                    />



                ))}
            </section>
        </div>
    )
}