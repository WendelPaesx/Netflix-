import './FilmeDestaque.css'
import React from 'react'

export default ({ item }) => {
    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }}>

            <div>{item.original_title}</div>


        </section>
    )

}
