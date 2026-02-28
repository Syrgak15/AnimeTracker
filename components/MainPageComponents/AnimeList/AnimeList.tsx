import "./style.css"
import Search from "@/components/MainPageComponents/Search/Search";

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

export default async function AnimeList() {

    const animeLists = await getAnimeLists();

    return (
        <>
            <Search animeLists={animeLists}/>
        </>
    )
}