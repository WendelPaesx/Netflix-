import React from "react";
import './linhaDeFilmes.css'


export default ({ titulo, itens }) => {
    return (
        <div className="movieRow" >
            <h2>{titulo}</h2>

           
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {itens.results.length > 0 && itens.results.map((item, key) => (
                       <div key={key} className="movieRow--item">
                         <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_titulo} />
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}