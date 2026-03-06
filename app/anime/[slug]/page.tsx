'use client'

import {use, useEffect, useState} from 'react'
import {AnimeListType} from "@/types/AnimeListType";
import Skeleton from '@/components/MUI-components/Skeleton/Skeleton';
import AnimeDetails from '@/components/MainPageComponents/AnimeDetails/AnimeDetails';

export default function AnimeDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [anime, setAnime] = useState<AnimeListType | null>(null);

    useEffect(() => {
        async function fetchAnimeDetails(slug: string) {
            try {
                const req = await fetch(`https://api.jikan.moe/v4/anime/${slug}`);
                if (!req.ok) {
                    throw new Error("Failed to fetch anime details");
                }
                const res = await req.json();
                setAnime(res.data);

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
                    <AnimeDetails anime={anime}/>
                ) : (
                    <Skeleton/>
                )
            }
        </>
    )
}