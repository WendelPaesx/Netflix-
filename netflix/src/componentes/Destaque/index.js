import './FilmeDestaque.css'
import React from 'react'

export default ({ item }) => {
    console.log(item)

    let lancamento =new Date(item.release_date)

    let genero=[]
    for(let i in item.genres){
        genero.push(item.genres[i].name)
    }
    let linguas=[]
    for(let i in item.spoken_languages){
        linguas.push(item.spoken_languages[i].name)
    }

    let descricao = item.overview
    if(descricao.length>200){
        descricao = descricao.substring(0,200)+'...'
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }}>

            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--nome'>{item.original_title}</div>
                    <div className='featured-info'>
                        <div className='featured--pontos'>{item.vote_average} pontos</div>
                        <div className='featured--ano'>{lancamento.getFullYear()}</div>
                        <div className='featured--linguas'>{linguas.join(' │ ' )}</div>
                        
                    </div>
                    <div className='featured--descricao'>{descricao}</div>
                    <div className='featured--botoes'>
                        <a href={`/watch/${item.id}`} className='featured--botaoassisir'>► Assistir</a>
                        <a href={`/lista/add/${item.id}`} className='featured--botaominhalista'>+ Minha Lista</a>

                    </div>
                    <div className='featured--genero'><strong>Generos:</strong>{genero.join(', ')}</div>

                    

                </div>
            </div>


        </section>
    )

}
