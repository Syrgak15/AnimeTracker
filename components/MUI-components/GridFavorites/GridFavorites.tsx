"use client"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "../Card/Card";
import {AnimeListType} from "@/types/AnimeListType";
import Link from 'next/link';

interface AnimeListProps {
    animeLists?: AnimeListType[];
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function ResponsiveGridFavorites({animeLists}: AnimeListProps) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 5 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {/*{animeLists?.map((anime, index) => (*/}
                {/*    <Grid key={index} size={{ xs: 2, sm: 4, md: 4, lg: 12/5 }} >*/}
                {/*        <Link*/}
                {/*            style={{ textDecoration: 'none' }}*/}
                {/*            href={`/anime/${anime.mal_id}`}*/}
                {/*        >*/}
                {/*            <Card anime={anime} />*/}
                {/*        </Link>*/}
                {/*    </Grid>*/}
                {/*))}*/}
            </Grid>
        </Box>
    );
}