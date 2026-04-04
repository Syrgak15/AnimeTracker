"use client"

import "./style.css"
import ProducerType from "@/types/ProducerType";
import {Box, Grid, Card, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Link from "next/link";

type ProducersProps = {
    producers: ProducerType[];
}

export default function ProducersPageClient({producers}: ProducersProps) {
    return (
        <div className="producers-page">
            <div className="producers-page__content">
                <div className="producers-content__title">
                    <h1>Producers & Studios</h1>
                </div>
                <div className="producers-content_subtitle">
                    <span>Explore anime studios and production companies</span>
                </div>
                <div className="producers-content__list">
                    <Box sx={{padding: 2}}>
                        <Grid container spacing={3}>
                            {producers.map((producer) => (
                                <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={producer.mal_id}>
                                    <Link
                                        target="_blank"
                                        href={`${producer.url}`}
                                    >
                                        <Card sx={{
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            boxShadow: 3,
                                            transition: "0.3s",
                                            position: "relative",
                                            '&:hover span': {
                                                transform: 'translateY(-5px)',
                                            },
                                            '&:hover .producer-card__image': {
                                                transform: 'scale(1.05)',
                                            },
                                            '&:hover p': {
                                                transform: 'translateY(-15px)',
                                                opacity: 1,
                                                paddingBottom: "5px"
                                            }
                                        }}
                                        >
                                            <Box
                                                className="producer-card__image"
                                                sx={{
                                                    height: 300,
                                                    borderRadius: 2,
                                                    overflow: 'hidden',
                                                    backgroundImage: `linear-gradient(to bottom, #ffffff63, rgba(0,0,0,0.5)), url(${producer.images.jpg.image_url})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    position: 'relative',
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    gap: "5px",
                                                    paddingBottom: "10px",
                                                    transition: "all 0.3s ease",
                                                }}
                                            />

                                            <Typography
                                                component="span"
                                                noWrap
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: '-15px',
                                                    left: '10px',
                                                    transition: "all 0.3s ease",
                                                }}>
                                                <Typography
                                                    component="div"
                                                    sx={{
                                                        paddingBottom: '5px',
                                                        color: "#fff",
                                                        fontWeight: "bold",
                                                        fontFamily: "var(--ffamily)",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    {producer.titles[0].title}
                                                </Typography>

                                                <Typography
                                                    component="p"
                                                    sx={{
                                                        display: "inline-flex",
                                                        marginTop: "7px",
                                                        gap: '4px',
                                                        fontSize: "14px",
                                                        fontWeight: 500,
                                                        color: "#f7efefcc",
                                                        transform: "translateY(20px)",
                                                        opacity: 0,
                                                        transition: "all 0.3s ease",
                                                        fontFamily: "var(--ffamily)",
                                                    }}
                                                >
                                                    <SlideshowIcon
                                                        fontSize="small"
                                                        sx={{
                                                            color: "#76cf4e",
                                                            width: "17px",
                                                        }}
                                                    />
                                                    {producer.count} Anime
                                                    <FavoriteIcon
                                                        fontSize="small"
                                                        sx={{
                                                            color: "#76cf4e",
                                                            marginLeft: "5px",
                                                            width: "15px",
                                                        }}
                                                    /> {producer.favorites}
                                                </Typography>
                                            </Typography>
                                        </Card>
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