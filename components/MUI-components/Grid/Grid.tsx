"use client"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from "../Card/Card";
import {AnimeListType} from "@/types/AnimeListType";
import Link from 'next/link';

interface AnimeListProps {
    animeLists: AnimeListType[];
}

export default function ResponsiveGrid({animeLists}: AnimeListProps) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
                columns={{ xs: 1, sm: 6, md: 12, lg: 15 }}
            >
                {animeLists?.map((anime, index) => (
                        <Grid key={index} size={{ xs: 1, sm: 3, md: 4, lg: 3 }} >
                            <Link
                                style={{ textDecoration: 'none' }}
                                href={`/anime/${anime.mal_id}`}
                            >
                                <Card anime={anime}/>
                            </Link>
                        </Grid>
                ))}
            </Grid>
        </Box>
    );
}