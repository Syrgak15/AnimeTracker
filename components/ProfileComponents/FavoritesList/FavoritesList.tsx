import "./style.css"
import {AnimeListType} from "@/types/AnimeListType";

interface AnimeFavoriteType {
    anime: AnimeListType;
}

export default function FavoritesList({anime} : AnimeFavoriteType) {

    console.log(anime, "from FavoriteList component")

    return (
        <div>{anime?.title}</div>
    )
}