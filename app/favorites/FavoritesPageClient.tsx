"use client"

import "./style.css"
import Skeleton from "@/components/MUI-components/Skeleton/Skeleton";
import {useSession} from 'next-auth/react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardFavorites from "@/components/MUI-components/CardFavorites/CardFavorites";
import Link from "next/link";
import {useState} from "react";
import EmptyState from "@/components/ProfileComponents/EmptyState/EmptyState";
import {FavoriteAnimeList} from "@/types/FavoriteAnimeList";

interface AnimeProp {
    animes: FavoriteAnimeList[];
}

export default function Favorites({animes}: AnimeProp) {
    const {data: session, status} = useSession();
    const [animeList, setAnimeList] = useState<FavoriteAnimeList[]>(animes);


    if (status === "loading") {
        return (
            <Skeleton/>
        )
    }

    if (status !== "authenticated") {
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
                <div>
                    {animeList.length !== 0 ? (
                        <>
                            <div className="favorites__subtitle">
                                <p>All anime added to your favorites</p>
                            </div>
                            <div className="favorites__grid">
                                <Box sx={{flexGrow: 1}}>
                                    <Grid
                                        container
                                        spacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
                                        columns={{ xs: 1, sm: 6, md: 12, lg: 15 }}
                                    >
                                        {animeList?.map((anime) => (
                                            <Grid key={anime.anime.mal_id} size={{ xs: 12, sm: 3, md: 4, lg: 3 }}>
                                                <Link
                                                    style={{textDecoration: 'none'}}
                                                    href={`/anime/${anime.animeId}`}
                                                >
                                                    <CardFavorites favorite={anime} setAnimeList={setAnimeList}/>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </div>
                        </>
                    ) : (
                        <EmptyState/>
                    )}
                </div>
            </div>
        </div>
    )
}