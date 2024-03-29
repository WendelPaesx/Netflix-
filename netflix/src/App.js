import tmdb from "./tmdb";
import React, { useEffect, useState } from "react"
import LinhaDeFilmes from "./componentes/Listas";
import './App.css'
import FilmeDestaque from "./componentes/Destaque";
import Header from "./componentes/Header";


export default () => {

    const [movieList, setMovieList] = useState([])
    const [dadosDestaque, setDadosDestaque] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)


    useEffect(() => {
        const carregaTudo = async () => {
            //pegando toda a lista
            let lista = await tmdb.getHomeList()
            setMovieList(lista)

            //pegando o filme destaque
            let acao = lista.filter(i => i.slug === 'Terror')
            let sorteio = Math.floor(Math.random() * (acao[0].itens.results.length - 1))
            let escolhido = acao[0].itens.results[sorteio]
            let infoEscolhido = await tmdb.getInfoFilme(escolhido.id, 'movie')

            setDadosDestaque(infoEscolhido)
            


        }
        carregaTudo()
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true)

            } else {
                setBlackHeader(false)


            }


        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
            
        }

    }, [])
    return (
        <div className="page">



            <Header
                black={blackHeader} />



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

            <footer>
                <p>Desenvolvido por <a href="https://github.com/wendelpaesx" target="blank"><strong>Wendel Paes</strong>.</a></p>

            </footer>
            {movieList.length <= 0 &&

                <div className="loading">
                    <img src="https://i.gifer.com/XOsX.gif" alt="Carregando" />
                </div>
            }
        </div>
    )
}