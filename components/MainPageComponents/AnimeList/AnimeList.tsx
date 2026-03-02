import SearchBar from "@/components/MUI-components/SearchBar/SearchBar";
import "./style.css"

async function getAnimeLists() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime`);

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
        const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie&limit=10`);
        if(!response.ok) throw new Error("Failed to fetch limited anime lists");

        const result = await response.json();
        return result.data;

    } catch(e: unknown) {
        console.log(e);
        return [];
    }
}

export default async function AnimeList() {

    const animeLists = await getAnimeLists();
    const limitedAnimeLists = await getLimitedAnimeLists();

    return (
        <>
            <SearchBar animeLists={animeLists} limitedAnimeLists={limitedAnimeLists}/>
        </>
    )
}