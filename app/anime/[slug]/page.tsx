'use client'

import {use, useEffect, useState} from 'react'
import {AnimeListType} from "@/types/AnimeListType";
import AnimeVideoType from "@/types/AnimeVideoType";
import Skeleton from '@/components/MUI-components/Skeleton/Skeleton';
import AnimeDetails from '@/components/MainPageComponents/AnimeDetails/AnimeDetails';
import Recommendations from "@/components/MainPageComponents/Recommendations/Recommendations";

export default function AnimeDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [anime, setAnime] = useState<AnimeListType | null>(null);
    const [videoUrl, setVideoUrl] = useState<AnimeVideoType | null>(null);

    useEffect(() => {
        async function fetchAnimeDetails(slug: string) {
            try {

                const [reqAnime, reqVideo] = await Promise.all([
                    fetch(`https://api.jikan.moe/v4/anime/${slug}`),
                    fetch(`https://api.jikan.moe/v4/anime/${slug}/videos`)
                ]);

                if (!reqAnime.ok) {
                    throw new Error("Failed to fetch anime details");
                }
                if (!reqVideo.ok) {
                    throw new Error("Failed to fetch anime videos");
                }

                const resAnime = await reqAnime.json();
                const resVideo = await reqVideo.json();

                setAnime(resAnime.data);
                setVideoUrl(resVideo.data);


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
                        <Recommendations/>
                    </div>
                ) : (
                    <Skeleton/>
                )
            }
        </>
    )
}