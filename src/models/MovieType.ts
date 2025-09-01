export type MovieType = {
	id: number;
	title: string;
	slugTitle: string;
	original_title: string;
	original_language: string;
	overview: string;
	poster_path: string | null;
	backdrop_path: string | null;
	release_date: string;
	adult: boolean;
	video: boolean;
	popularity: number;
	vote_average: number;
	vote_count: number;
	genre_ids: number[];
}
