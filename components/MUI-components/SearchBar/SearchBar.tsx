"use client"

import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {AnimeListType} from "@/types/AnimeListType";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Grid from "@/components/MUI-components/Grid/Grid";

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
            <section className="anime-list">
                <Paper
                    component="form"
                    sx={{
                        p: "6px 8px",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        width: 500,
                        backgroundColor: "#3871a2",
                    }}
                >
                    <InputBase
                        value={currentValue}
                        onChange={(e) => handleChange(e)}
                        sx={{ml: 1, flex: 1, color: "#FFF"}}
                        placeholder="Search current season anime"
                        inputProps={{"aria-label": "search anime"}}
                    />

                    <IconButton
                        type="submit"
                        sx={{
                            p: "10px",
                            backgroundColor: "#203954",
                            color: "#FFF",
                            ":hover": {backgroundColor: "#15273c"},
                        }}
                        aria-label="search"
                    >
                        <SearchIcon/>
                    </IconButton>
                </Paper>

                <header className="anime-list__title" style={{marginTop: 16}}>
                    <WhatshotIcon className="anime-list__title-icon"/>
                    <span>Title</span>
                    <span style={{marginLeft: 8, opacity: 0.8}}>
          ({filteredAnime.length})
        </span>
                </header>

                <div className="anime-grid">
                    <Grid animeLists={filteredAnime}/>
                </div>
            </section>
        </>

    );
}