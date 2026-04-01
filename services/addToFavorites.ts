import {AnimeListType} from "@/types/AnimeListType";

export const addToFavorites = async (anime: AnimeListType, email: string, animeId: number) => {
    const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ anime, email, animeId }),
    });

    const data = await res.json();

    if (!res.ok || data.message === "Already in favorites") {
        throw new Error("Failed to add favorite or already exists");
    }

    return data;
};