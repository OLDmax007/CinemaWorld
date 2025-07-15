export const baseUrl = import.meta.env.VITE_TMDB_API_URL

export const urls = {
        movies: {
                all: '/discover/movie',
                byId: (id: string) => `/movie/${id}`
        },
        genres: '/genre/movie/list',
        searchMovie: '/search/movie'
}