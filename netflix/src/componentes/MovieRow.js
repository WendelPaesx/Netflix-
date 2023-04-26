import React from 'react'
import './MovieRow.css'

export default ({ title, items }) => {
    return (
        <><h2>{title}</h2><div className='movieRow--listaarea'>
            {items.results.length > 0 && items.results.map((item, key) => (
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

            ))}
        </div></>

    )
}
