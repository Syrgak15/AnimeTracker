import SearchBar from "@/components/MUI-components/SearchBar/SearchBar";
import "./style.css"
import {getFavoriteAnimes} from "@/app/favorites/page";
import {auth} from "@/auth";
import {TestPost} from "@/app/api/test/route";

async function getAnimeLists() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/now`);

        if(!response.ok) {
            throw new Error("Failed to fetch anime lists");
        }

        const result = await response.json();
        return result.data;

    }catch (e:unknown) {
        console.log(e);
        return [];
    }
}

async function getLimitedAnimeLists() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming?type=special`);
        if(!response.ok) throw new Error("Failed to fetch limited anime lists");

        const result = await response.json();
        return result.data;

    } catch(e: unknown) {
        console.log(e);
        return [];
    }
}

export default async function AnimeList() {
    const session = await auth();
    const userEmail = String(session?.user?.email);

    if (!userEmail) {
        return;
    }

    const animeLists = await getAnimeLists();
    const limitedAnimeLists = await getLimitedAnimeLists();
    const favorites = await getFavoriteAnimes(userEmail)

   return (
        <>
            <SearchBar animeLists={animeLists} limitedAnimeLists={limitedAnimeLists} favorites={favorites}/>
        </>
    )
}