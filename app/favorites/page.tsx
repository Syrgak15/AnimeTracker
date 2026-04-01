import FavoritesPageClient from "./FavoritesPageClient";
import {getFavorites} from "@/services/getFavorites";
import {auth} from "@/auth";

export async function getFavoriteAnimes (email: string) {
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

    if (!userEmail) {
        return <FavoritesPageClient animes={[]} />;
    }

    const result = await getFavoriteAnimes(userEmail);
    console.log(process.env.NODE_ENV);
    return (
        <FavoritesPageClient animes={result}/>
    )
}