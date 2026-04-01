'use client'

import {use, useEffect, useState} from 'react'
import {AnimeListType} from "@/types/AnimeListType";
import AnimeVideoType from "@/types/AnimeVideoType";
import Skeleton from '@/components/MUI-components/Skeleton/Skeleton';
import AnimeDetails from '@/components/MainPageComponents/AnimeDetails/AnimeDetails';
import Recommendations from "@/components/MainPageComponents/Recommendations/Recommendations";
import Characters from "@/components/MainPageComponents/Characters/Characters";
import CharactersType from "@/types/CharactersType";

export default function AnimeDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [anime, setAnime] = useState<AnimeListType | null>(null);
    const [videoUrl, setVideoUrl] = useState<AnimeVideoType | null>(null);
    const [characters, setCharacters] = useState<CharactersType[]>([]);

    useEffect(() => {
        async function fetchAnimeDetails(slug: string) {
            try {

                const [reqAnime, reqVideo, reqCharacters] = await Promise.all([
                    fetch(`https://api.jikan.moe/v4/anime/${slug}`),
                    fetch(`https://api.jikan.moe/v4/anime/${slug}/videos`),
                    fetch(`https://api.jikan.moe/v4/anime/${slug}/characters`)
                ]);

                if (!reqAnime.ok) {
                    throw new Error("Failed to fetch anime details");
                }
                if (!reqVideo.ok) {
                    throw new Error("Failed to fetch anime videos");
                }
                if (!reqCharacters.ok) {
                    throw new Error("Failed to fetch anime characters");
                }

                const resAnime = await reqAnime.json();
                const resVideo = await reqVideo.json();
                const resCharacters = await reqCharacters.json();

                setAnime(resAnime.data);
                setVideoUrl(resVideo.data);
                setCharacters(resCharacters.data);

            } catch(e: unknown) {
                console.log(e);
                return [];
            }
        }
        fetchAnimeDetails(slug);
    }, [slug]);

    return (
        <>
            {
                anime ? (
                    <div>
                        <AnimeDetails anime={anime} video={videoUrl}/>
                        <Characters characters={characters}/>
                        <Recommendations/>
                    </div>
                ) : (
                    <Skeleton/>
                )
            }
        </>
    )
}