export interface FavoriteAnimeList {
    anime: {
        mal_id: number;
        title: string;
        images: {
            jpg: {
                large_image_url: string;
            };
        };
        score: number;
        episodes: number;
        genres: {
            name: string;
        }[];
        aired: {
            prop: {
                from: {
                    year: number;
                };
            };
        };
    };
   animeId: number;
   email: string,
   id: string,
}