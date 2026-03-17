import {AnimeListType} from "@/types/AnimeListType";

export const addToFavorites = async (anime : AnimeListType, email: string, animeId: number) => {
    const res = await fetch(`http://localhost:3001/favorites`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            anime,
            email,
            animeId
        })
    })

    return res.json();
}