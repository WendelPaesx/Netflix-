import './FilmeDestaque.css'
import React from 'react'

export default ({ item }) => {
    console.log(item)
    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }}>

            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_title}</div>
                    <div className='featured-info'>
                        <div className='featured--pontos'>{item.vote_average} pontos</div>
                        <div className='featured--ano'>{item.release_date}</div>
                        <div className='featured--intro'>{item.overview}</div>
                    </div>

                </div>
            </div>


        </section>
    )

}
