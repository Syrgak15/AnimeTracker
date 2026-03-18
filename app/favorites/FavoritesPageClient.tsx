"use client"

import "./style.css"
import Skeleton from "@/components/MUI-components/Skeleton/Skeleton";
import { useSession } from 'next-auth/react';
import {AnimeListType} from "@/types/AnimeListType";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardFavorites from "@/components/MUI-components/CardFavorites/CardFavorites";
import Link from "next/link";
import {useEffect, useState} from "react";

interface AnimeProp {
    animes: AnimeListType[];
}

export default function Favorites({animes} : AnimeProp) {
    const {data: session, status} = useSession();
    const [animeList, setAnimeList] = useState<AnimeListType[]>([]);

    if (status === "loading") {
        return (
            <Skeleton/>
        )
    }

    if(status !== "authenticated") {
        return (
            <p>You are not authorized to view this page!</p>
        )
    }

    return (
        <div className="favorites">
            <div className="favorites-content">
                <div className="favorites__title">
                    <span>My Favorites List</span>
                </div>
                <div className="favorites__subtitle">
                    <p>All anime added to your favorites</p>
                </div>
                <div className="favorites__grid">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 5 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            {animes?.map((anime, index) => (
                                <Grid key={index} size={{ xs: 2, sm: 4, md: 4, lg: 12/5 }} >
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        href={`/anime/${anime.animeId}`}
                                    >
                                        <CardFavorites favorite={anime}/>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}