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
import {FavoriteAnimeList} from "@/types/FavoriteAnimeList";
import AddToFavorites from "@/components/MainPageComponents/AddToFavorites/AddToFavorites";
import DeleteFromFavorites from "@/components/ProfileComponents/DeleteFromFavorites/DeleteFromFavorites";

interface AnimeListProps {
    favorite: AnimeListType;
    setAnimeList: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function ImgMediaCard({favorite, setAnimeList}: AnimeListProps) {

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
                alt={favorite.anime.title}
                height="400"
                image={favorite.anime.images.jpg.large_image_url}
            />

            <Typography
                sx={{
                    position: 'absolute',
                    top: '9px',
                    left: '7px',
                    color: 'rgb(154 59 59 / 96%)'
                }}
            >
                <DeleteFromFavorites id={favorite.animeId} setAnimeList={setAnimeList}/>
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
                Ep {favorite.anime.episodes}
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
                        {favorite.anime.title}
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
                            {favorite.anime.score}
                        </Typography>

                        <Typography
                            gutterBottom variant="h5"
                            component="div"
                            sx={{display: 'flex', alignItems: "center", gap: "5px", color: '#f6fff3', fontSize: '17px', fontFamily: "var(--ffamily)"}}>
                            {favorite.anime.aired.prop.from.year} Year
                        </Typography>
                    </CardActions>
                </Box>

                <Box
                    sx={{display: 'flex', gap: '5px'}}
                >
                    {favorite.anime.genres?.slice(0, 2).map((genre, id) => (
                        <span key={id}>
                            <Genre name={genre.name}/>
                        </span>
                    ))}
                    {favorite.anime.genres?.length > 2 && (
                        <span>
                            <Genre name={`+${favorite.anime.genres.length - 2}`}/>
                        </span>
                    )}
                </Box>
            </Container>
        </Card>
    );
}