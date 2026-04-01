import './style.css'
import CharactersType from "@/types/CharactersType";
import GridCharacters from "@/components/MUI-components/GridCharacters/GridCharacters";
import * as React from "react";

export interface CharactersProps {
    characters: CharactersType[];
}

export default function Characters({characters}: CharactersProps) {
    return (
        <>
            <div className="characters">
                <div className="characters-title">
                    <span>Characters</span>
                </div>
                <div className="characters-list">
                    <GridCharacters characters={characters}/>
                </div>
            </div>
        </>
    )
}