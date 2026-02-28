import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {AnimeListType} from "@/types/AnimeListType";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { Container } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import GroupsIcon from '@mui/icons-material/Groups';

interface AnimeListProps {
    anime: AnimeListType;
}

export default function ImgMediaCard({anime}: AnimeListProps) {
    return (
        <Card sx={{
            maxWidth: 345,
            height: 600,
            backgroundColor: "#121e28",
            color: "#FFF",
            fontWeight: "bold",
            borderRadius: '10px',
            transform: "scale(1)",
            transition: "transform 0.3s ease",
            ":hover": {
                transform: "translateY(-8px)"
            }
        }}>
            <CardMedia
                component="img"
                alt={anime.title}
                height="400"
                image={anime.images.jpg.large_image_url}
            />

            <Container>
                <CardContent sx={{
                    padding: '16px 0',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    height: "80px"
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {anime.title}
                    </Typography>
                </CardContent>

                <Box>
                    <CardActions sx={{padding: '16px 0', display: 'flex', justifyContent: 'space-between'}}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{display: 'flex', alignItems: "center", gap: "2px", color: 'grey'}}>
                            <Box sx={{height: '30px'}}>
                                <GradeIcon fontSize="small"/>
                            </Box>
                            {anime.score}
                        </Typography>

                        <Typography
                            gutterBottom variant="h5"
                            component="div"
                            sx={{display: 'flex', alignItems: "center", gap: "5px", color: 'grey'}}>
                            <Box>
                                <GroupsIcon fontSize="small" />
                            </Box>
                            {anime.favorites}
                        </Typography>

                    </CardActions>
                </Box>
            </Container>
        </Card>
    );
}