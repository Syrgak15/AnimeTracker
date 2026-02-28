"use client"

import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import {AnimeListType} from "@/types/AnimeListType";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Grid from "@/components/MUI-components/Grid/Grid";
import Box from '@mui/material/Box';
import Tabs from "@/components/MainPageComponents/Tabs/Tabs";

interface AnimeListProps {
    animeLists: AnimeListType[];
}

export default function CustomizedInputBase({ animeLists }: AnimeListProps) {

    const [currentValue, setCurrentValue] = useState("");
    const [filteredAnime, setFilteredAnime] = useState<AnimeListType[]>(animeLists);

    const handleChange = (e: any) => {
        const value = e.target.value;
        setCurrentValue(value);

        if(currentValue) {
            const filteredAnimeList = animeLists.filter((anime) =>
                anime.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredAnime(filteredAnimeList);
        } else {
            setFilteredAnime(animeLists);
        }
    }
    return (
        <>
            <div className="anime-list">
                <div className="anime-list__container">
                    <Paper
                        component="form"
                        sx={{
                            p: "6px 8px",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            width: 500,
                            backgroundColor: "#3871a2",
                            margin: "0 auto"
                        }}
                    >
                        <InputBase
                            value={currentValue}
                            onChange={(e) => handleChange(e)}
                            sx={{ml: 1, flex: 1, color: "#FFF"}}
                            placeholder="Search current season anime"
                            inputProps={{"aria-label": "search anime"}}
                        />
                    </Paper>

                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Tabs/>
                    </Box>

                    <div className="anime-list__title" style={{marginTop: 16}}>
                        <WhatshotIcon className="anime-list__title-icon" sx={{marginRight: '5px', color: "#0b7fe8"}}/>
                        <span>Popular This Season</span>
                    </div>

                    <div className="anime-grid">
                        <Grid animeLists={filteredAnime}/>
                    </div>
                </div>
            </div>
        </>

    );
}