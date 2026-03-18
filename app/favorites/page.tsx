import FavoritesPageClient from "./FavoritesPageClient";
import {getFavorites} from "@/services/getFavorites";
import {auth} from "@/auth";

async function getFavoriteAnimes (email: string) {
    try {
        const res = await getFavorites(email);
        return res;

    } catch(e: unknown) {
        console.log(e);
        return [];
    }
}

export default async function Favorites() {
    const session = await auth();
    const userEmail = String(session?.user?.email);

    const result = await getFavoriteAnimes(userEmail);

    return (
        <FavoritesPageClient animes={result}/>
    )
}