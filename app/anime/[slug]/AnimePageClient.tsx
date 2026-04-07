import {AnimeListType} from "@/types/AnimeListType";
import AnimeVideoType from "@/types/AnimeVideoType";
import Skeleton from '@/components/MUI-components/Skeleton/Skeleton';
import AnimeDetails from '@/components/MainPageComponents/AnimeDetails/AnimeDetails';
import Characters from "@/components/MainPageComponents/Characters/Characters";
import CharactersType from "@/types/CharactersType";
import RecommendationsServerComponent from "@/components/MainPageComponents/Recommendations/page";

interface AnimePageProps {
    anime: AnimeListType | null;
    videoUrl: AnimeVideoType | null;
    characters: CharactersType[];
}

export default function AnimePageClient({ anime, videoUrl, characters}: AnimePageProps) {
    return (
        <>
            {
                anime ? (
                    <div>
                        <AnimeDetails anime={anime} video={videoUrl}/>
                        <Characters characters={characters}/>
                        <RecommendationsServerComponent/>
                    </div>
                ) : (
                    <Skeleton/>
                )
            }
        </>
    )
}