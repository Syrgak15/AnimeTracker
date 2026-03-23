"use client"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardRecommendations from "../CardRecommendations/CardRecommendations";
import {AnimeListType} from "@/types/AnimeListType";
import Link from 'next/link';

interface AnimeListProps {
    recommendations: AnimeListType[];
}

export default function ResponsiveGrid({recommendations}: AnimeListProps) {

    return (
        <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Grid
                container
                spacing={{ xs: 3, sm: 2, md: 3, lg: 3 }}
                columns={{ xs: 1, sm: 6, md: 12, lg: 15 }}
            >
                {recommendations?.map((anime, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 3, md: 4, lg: 3 }} >
                        <Link
                            style={{ textDecoration: 'none' }}
                            href={`/anime/${anime.mal_id}`}
                        >
                            <CardRecommendations anime={anime} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}