export const baseUrl = import.meta.env.VITE_TMDB_API_URL

export const urls = {
        movies: {
                all: '/discover/movie',
                getById: (id: string) => `/movie/${id}`,
                search: '/search/movie',
                genres: {
                        all: '/genre/movie/list'
                }
        },
}