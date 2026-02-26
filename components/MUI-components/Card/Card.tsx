import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {AnimeListType} from "@/types/AnimeListType";
import Typography from '@mui/material/Typography';

interface AnimeListProps {
    anime: AnimeListType;
}

export default function ImgMediaCard({anime}: AnimeListProps) {
    return (
        <Card sx={{ maxWidth: 345, height: 600 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="400"
                image={anime.images.jpg.large_image_url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {anime.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography gutterBottom variant="h5" component="div">
                    {anime.score}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {anime.favorites}
                </Typography>
            </CardActions>
        </Card>
    );
}