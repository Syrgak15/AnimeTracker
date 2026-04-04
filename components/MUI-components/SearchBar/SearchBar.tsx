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
    limitedAnimeLists: AnimeListType[];
}

export default function CustomizedInputBase({ animeLists, limitedAnimeLists }: AnimeListProps) {

    const [currentValue, setCurrentValue] = useState("");
    const [filteredLimitedAnimeList, setFilteredLimitedAnimeList] = useState<AnimeListType[]>(limitedAnimeLists);
    const [filteredAnimeList, setFilteredAnimeList] = useState<AnimeListType[]>(animeLists);
    const [activeTab, setActiveTab] = useState<number>(0);


    const handleChange = (e: any) => {
        const value = e.target.value;
        setCurrentValue(value);

        if(activeTab === 0) {
            const filteredList = animeLists.filter((anime) =>
                anime.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredAnimeList(filteredList);
        } else {
            setFilteredAnimeList(animeLists);
        }

        if(activeTab === 1) {
            const filteredLimitedList = limitedAnimeLists.filter((anime) =>
                anime.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredLimitedAnimeList(filteredLimitedList);
        } else {
            setFilteredLimitedAnimeList(limitedAnimeLists);
        }


    }

    const tabsConfig = [
        {
            title: "Popular This Season",
            data: filteredAnimeList,
        },
        {
            title: "Upcoming Episodes",
            data: filteredLimitedAnimeList,
        }
    ];


    return <>
        <div className="anime-list">
                <Paper
                    component="form"
                    sx={{
                        p: "6px 8px",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        maxWidth: 500,
                        backgroundColor: "var(--bg-color)",
                        margin: "0 auto",
                        '@media (max-width: 600px)': {
                            width: '100%',
                        },
                    }}
                >
                    <InputBase
                        value={currentValue}
                        onChange={handleChange}
                        sx={{
                            ml: 1,
                            flex: 1,
                            color: "var(--text-color)",
                            fontWeight: "bold",
                            fontFamily: "var(--ffamily)"
                        }}
                        placeholder="Search current season anime"
                        inputProps={{ "aria-label": "search anime" }}
                    />
                </Paper>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
                </Box>

                <div className="anime-list__title" style={{ marginTop: 16 }}>
                    <WhatshotIcon
                        className="anime-list__title-icon"
                        sx={{ marginRight: "5px", color: "#48b282" }}
                    />

                    {tabsConfig[activeTab].title}
                </div>

                <div className="anime-grid">
                    {tabsConfig[activeTab].data.length !== 0 ? (
                        <Grid
                            animeLists={
                                tabsConfig[activeTab].data
                            }
                        />
                    ) : (
                        <span>No anime found matching your search.</span>
                    ) }
                </div>
        </div>
    </>
}