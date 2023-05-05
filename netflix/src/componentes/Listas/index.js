import React from "react";
import './linhaDeFilmes.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({ titulo, itens }) => {
    return (
        <div className="movieRow" >
            <h2>{titulo}</h2>

            <div className="movie-row-left">
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movie-row-right">
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
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