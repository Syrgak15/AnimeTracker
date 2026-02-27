import SearchBar from "@/components/MUI-components/SearchBar/SearchBar"
import "./style.css"
import {AnimeListType} from "@/types/AnimeListType";

interface AnimeListProps {
    animeLists: AnimeListType[];
}

export default function Search({animeLists}: {animeLists: AnimeListProps}) {
    return (
        <div className="search">
            <SearchBar animeLists={animeLists}/>
        </div>
    )
}