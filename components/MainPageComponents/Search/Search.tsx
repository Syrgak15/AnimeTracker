import SearchBar from "@/components/MUI-components/SearchBar/SearchBar";
import "./style.css"
import { SearchProps } from "@/types/SearchType";

export default function Search({onSearch}: SearchProps) {
    return (
        <div className="search">
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}