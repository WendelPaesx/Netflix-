const API_KEY = 'e979be503062924f3a1eb1fc8c60f59a';
const API_BASE = 'https://api.themoviedb.org/3';
/*
-originais
-topRated
-recomendados para voce
- acao 
-comedia-terror
-romance-documentario
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export default {

    getHomeList: async () => {
        return [
            

            {
                slug: 'ficcao cientifica',
                titulo: 'Ficção Científica',
                itens: await basicFetch(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Aventura',
                titulo: 'Aventura',
                itens: await basicFetch(`/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'em alta',
                titulo: 'Em Alta',
                itens: await basicFetch(`/discover/movie?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'acao',
                titulo: 'Ação',
                itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
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
            },
            
            {
                slug: 'Crimes',
                titulo: 'Crimes',
                itens: await basicFetch(`/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}`)
            },
            
            {
                slug: 'Drama',
                titulo: 'Drama',
                itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            
            {
                slug: 'Fantasia',
                titulo: 'Fantasia',
                itens: await basicFetch(`/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`)
            },
            
            {
                slug: 'Familia',
                titulo: 'Familia',
                itens: await basicFetch(`/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
            }
        

        ]
    },
    getInfoFilme: async (idFilme, type) => {
        let info = {}

        if (idFilme) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${idFilme}?language=pt-BR&api_key=${API_KEY}`)


                    break;

                case 'tv':
                    info = await basicFetch(`/tv/${idFilme}?language=pt-BR&api_key=${API_KEY}`)


                    break;
                default:
                    info = null
                    break;
            }
        }

        return info

    }
}
