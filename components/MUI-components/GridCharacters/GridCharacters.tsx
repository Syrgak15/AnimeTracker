"use client"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {CharactersProps} from "@/components/MainPageComponents/Characters/Characters";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import ModalCharacters from "@/components/MUI-components/ModalCharacters/ModalCharacters";
import CharactersType from "@/types/CharactersType";
import PaginationCharacters from "@/components/MUI-components/PaginationCharacters/PaginationCharacters";
import {useState} from "react";

export default function GridCharacters({characters}: CharactersProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedCharacter, setSelectedCharacter] = React.useState<CharactersType | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage, setCharactersPerPage] = useState(10);
    const amountOfPages = Math.ceil(characters.length / charactersPerPage);
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (ch: CharactersType) => {
        handleOpen();
        setSelectedCharacter(ch);
    }

    return (
        <>
            <Box sx={{marginTop: 4}}>
                <Grid
                    container
                    spacing={{xs: 2, sm: 2, md: 2, lg: 3}}
                    columns={{xs: 1, sm: 8, md: 12, lg: 15}}
                >
                    {characters?.slice(startIndex, endIndex).map((ch) => (
                        <Grid key={ch.character.mal_id} size={{xs: 1, sm: 4, md: 4, lg: 3}}>
                            <Card
                                onClick={() => handleClick(ch)}
                                sx={{
                                    borderRadius: 2,
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    ":hover": {
                                        transform: "translateY(-8px)",
                                    },
                                }}
                            >
                                <CardMedia
                                    sx={{
                                        height: 380,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                    }}
                                    image={ch.character.images.jpg.image_url}
                                    title={ch.character.name}
                                />
                                <CardContent sx={{backgroundColor: "var(--bg-color)"}}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            textAlign: "center",
                                            width: "max-content",
                                            color: "var(--text-color)",
                                            fontFamily: "var(--ffamily)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {ch.character.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {characters.length > 11 && (
                <div className="characters-list__pagination">
                    <PaginationCharacters
                        amountOfPages={amountOfPages}
                        currentPage={currentPage}
                        onChange={(event, page) => setCurrentPage(page)}
                    />
                </div>
            )}
            <ModalCharacters open={open} handleClose={handleClose} character={selectedCharacter}/>
        </>
    );
}