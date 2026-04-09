import {AnimeListType} from "@/types/AnimeListType";
import AnimeVideoType from "@/types/AnimeVideoType";
import AnimeDetails from '@/components/MainPageComponents/AnimeDetails/AnimeDetails';
import Characters from "@/components/MainPageComponents/Characters/Characters";
import CharactersType from "@/types/CharactersType";
import RecommendationsServerComponent from "@/components/MainPageComponents/Recommendations/page";
import * as React from "react";
import NotFound from "@/components/MainPageComponents/NotFound/NotFound";

interface AnimePageProps {
    anime: AnimeListType | null;
    videoUrl: AnimeVideoType | null;
    characters: CharactersType[];
}

export default function AnimePageClient({ anime, videoUrl, characters }: AnimePageProps) {
    if(!anime) return null;

    return (
        <>
            <AnimeDetails anime={anime} video={videoUrl} />
            {characters?.length > 0 ? (
                <Characters characters={characters} />
            ) : (
                <>
                    <div style={{marginBottom: "50px"}}>
                        <div className="characters-title">
                            <span>Characters</span>
                        </div>
                        <NotFound target={"characters"}/>
                    </div>
                </>
            )}
            <RecommendationsServerComponent/>
        </>
    );
}