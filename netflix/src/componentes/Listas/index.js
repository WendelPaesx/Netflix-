import React, { useState } from "react";
import './linhaDeFilmes.css'








export default ({ titulo, itens }) => {

    const [scrollX, setScrollX] = useState(0)

    const setaEsq = () => {
        let x = scrollX + Math.round(window.innerWidth/2)
        if(x>0){
            x=0

        }
setScrollX(x)
    }
    const setaDir = () => {
        let x = scrollX - Math.round(window.innerWidth/2)
        let listw = itens.results.length *250
        if((window.innerWidth- listw)>x){
            x = (window.innerWidth- listw)-70

        }
        setScrollX(x)


    }

    return (
        <div className="movieRow" >
            <h2>{titulo}</h2>
            <div className="movieRowLeft" onClick={setaEsq}>
                ﴾
            </div>
            <div className="movieRowRight" onClick={setaDir}>
                ﴿

            </div>






            <div className="movieRow--listarea">
                <div className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: itens.results.length*250
                    }}>
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