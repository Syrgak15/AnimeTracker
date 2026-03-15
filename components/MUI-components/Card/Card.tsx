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
import Genre from "@/components/MainPageComponents/Genre/Genre";
import AddToFavorites from "@/components/MainPageComponents/AddToFavorites/AddToFavorites";

interface AnimeListProps {
    anime: AnimeListType;
}

export default function ImgMediaCard({anime}: AnimeListProps) {

    return (
        <Card sx={{
            maxWidth: 345,
            height: 600,
            backgroundColor: "#8ab37fde",
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
                sx={{position: 'relative'}}
                component="img"
                alt={anime.title}
                height="400"
                image={anime.images.jpg.large_image_url}
            />

            <Typography
                sx={{
                    position: 'absolute',
                    top: '9px',
                    left: '7px',
                    color: 'rgb(161 247 5 / 96%)'
                }}
            >
                <AddToFavorites anime={anime}/>
            </Typography>

            <Typography
                sx={{
                    position: 'absolute',
                    backgroundColor: "#118fe8",
                    top: '9px',
                    right: '5px',
                    padding: '1px 9px',
                    borderRadius: '5px',
                    fontSize: "13px"
                }}
            >
                Ep {anime.episodes}
            </Typography>

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
                    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "var(--ffamily)"}}>
                        {anime.title}
                    </Typography>
                </CardContent>

                <Box>
                    <CardActions sx={{padding: '16px 0', display: 'flex', justifyContent: 'space-between'}}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{display: 'flex', alignItems: "center", gap: "2px", color: '#e2cc12', fontSize: '17px', fontFamily: "var(--ffamily)"}}>
                            <Box sx={{height: '17px'}}>
                                <GradeIcon
                                    sx={{fontSize: '17px'}}
                                    fontSize="small"/>
                            </Box>
                            {anime.score}
                        </Typography>

                        <Typography
                            gutterBottom variant="h5"
                            component="div"
                            sx={{display: 'flex', alignItems: "center", gap: "5px", color: '#f6fff3', fontSize: '17px', fontFamily: "var(--ffamily)"}}>
                            {anime.aired.prop.from.year} Year
                        </Typography>
                    </CardActions>
                </Box>

                <Box
                    sx={{display: 'flex', gap: '5px'}}
                >
                    {anime.genres?.slice(0, 2).map((genre, id) => (
                        <span key={id}>
                            <Genre name={genre.name}/>
                        </span>
                    ))}
                    {anime.genres?.length > 2 && (
                        <span>
                            <Genre name={`+${anime.genres.length - 2}`}/>
                        </span>
                    )}
                </Box>
            </Container>
        </Card>
    );
}