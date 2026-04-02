import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CharactersType from "@/types/CharactersType";
import {Divider, Stack} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: "1px solid black",
    p: { xs: 3, sm: 5, md: 8 },
    borderRadius: "10px",
    width: { xs: '90%', sm: 600, md: 700 },
    maxHeight: '90vh',
    '&:focus-visible': {
        outline: 'none',
        boxShadow: 'none',
    },
};
interface ModalProps {
    open: boolean,
    handleClose: () => void,
    character: CharactersType | null;
}

export default function ModalCharacters({open, handleClose, character}: ModalProps) {

    if(!character) return null;

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: { timeout: 500 },
                }}
            >
                <Box sx={style}>
                    <Stack spacing={2}>
                        <Box
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                color: "grey",
                                transition: "color 0.1s ease",
                                '&:hover': {
                                    color: "#fff"
                                }
                            }}
                        >
                            <CloseIcon/>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={character.character.images.jpg.image_url}
                                alt={character.character.name}
                                sx={{
                                    maxWidth: '200px',
                                    maxHeight: '250px',
                                    borderRadius: 1,
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h5"
                            fontWeight={600}
                            textAlign="center"
                            sx={{
                                color: "var(--bg-color)",
                                fontWeight: "bold",
                                fontFamily: "var(--ffamily)",
                            }}>
                            {character.character.name}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                gap: "15px",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="button"
                                sx={{
                                    padding: "2px 10px",
                                    borderRadius: "50px",
                                    backgroundColor: "red",
                                    width: "max-content",
                                    display: "flex",
                                    gap: "4px",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: "#FFF",
                                }}
                            >
                                <FavoriteBorderIcon fontSize="small"/> {character.favorites}
                            </Typography>

                            <Typography
                                variant="button"
                                sx={{
                                    padding: "2px 10px",
                                    borderRadius: "50px",
                                    backgroundColor: "#643dc7",
                                    width: "max-content",
                                    display: "flex",
                                    fontSize: "12px",
                                    textTransform: "capitalize",
                                    fontWeight: "bold",
                                    color: "#FFF",
                                }}
                            >
                                Role - {character.role}
                            </Typography>
                        </Box>


                        <Divider />

                        <Typography
                            variant="subtitle1"
                            fontWeight={500}
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontFamily: "var(--ffamily)",
                            }}
                        >
                            Voice Actors:
                        </Typography>
                        {character?.voice_actors.length > 0 ? (
                            <Stack spacing={1} direction="column">
                                {character.voice_actors.map((va) => (
                                    <Stack
                                        key={va.person.mal_id}
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <CardMedia
                                            component="img"
                                            image={va.person.images.jpg.image_url}
                                            alt={va.person.name}
                                            sx={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "var(--bg-color)",
                                                fontWeight: "bold",
                                                fontFamily: "var(--ffamily)",
                                                textAlign: { xs: 'center', sm: 'left' },
                                            }}
                                        >
                                            {va.person.name} ({va.language})
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="#fff" fontFamily="var(--ffamily)" fontWeight="bold">No voice actors available.</Typography>
                        )}
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}