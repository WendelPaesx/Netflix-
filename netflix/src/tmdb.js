const API_KEY ='e979be503062924f3a1eb1fc8c60f59a';
const API_BASE ='https://api.themoviedb.org/3';
/*
-originais
-topRated
-recomendados para voce
- acao 
-comedia-terror
-romance-documentario
*/

const basicFetch = async (endpoint)=>{
    const req= await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}



export default{

    getHomeList: async ()=>{
        return[
            {
                slug: 'originals',
                titulo: 'Originais do Netflix',
                itens: await basicFetch(`https://api.themoviedb.org/3/movie/76341?language=pt-BR&api_key=${API_KEY}`)
            },
           /*   {
                slug: 'top rated',
                titulo: 'Mais Visto',
                itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`)
            },
          {
                slug: 'Recomendados',
                titulo: 'Recomendados para voce',
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key${API_KEY}`)
            },
            {
                slug: 'ação',
                titulo: 'ação',
                itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key${API_KEY}`)
            },
            {
                slug: 'Comedia',
                titulo: 'Comedia',
                itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Terror',
                titulo: 'Terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Romance',
                titulo: 'Romance',
                itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Documentario',
                titulo: 'Documentario',
                itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }*/
            
        ]
    }
}
