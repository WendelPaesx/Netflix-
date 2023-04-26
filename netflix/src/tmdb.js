const API_KEY ='e979be503062924f3a1eb1fc8c60f59a';

const API_BASE ='https://api.themoviedb.org/3';
// originais da netflix, recomendados, em alta(top rated),acao, comedia, terror, romance e documentarios

const basicFetch = async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default{
    getHomeList: async () =>{
        return[{
            slug: 'originals',
            title: 'Originais do Netflix',
            itens: await basicFetch(`/discover/tv?with_network=213&languafem=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'Trending',
            title: 'Recomendados para Você',
            items:  await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        
        {
            slug: 'Top Rated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key${API_KEY}`)
        },
        /*{
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key${API_KEY}`)
        },
        ,
        {
            slug: 'Comédia',
            title: 'comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key${API_KEY}`)
        },
        ,
        {
            slug: 'Terror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key${API_KEY}`)
        },
        ,
        {
            slug: 'Romance',
            title: 'romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key${API_KEY}`)
        },
        ,
        {
            slug: 'Documentário',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key${API_KEY}`)
        }*/
        
            
        ]
    }

}