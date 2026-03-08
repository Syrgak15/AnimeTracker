export interface AnimeListType {
    images: {
        jpg: {
            large_image_url: string
        }
    },
    title: string,
    score: number,
    favorites: number,
    episodes: number,
    genres: [
        {
            name: string,
        }
    ],
    mal_id: number,
    synopsis: string,
    type: string,
    aired: {
        prop: {
            from: {
                year: number
            }
        }
    },
    status: string,
    source: string,
}