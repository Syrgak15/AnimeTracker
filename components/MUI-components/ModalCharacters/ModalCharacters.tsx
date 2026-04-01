import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CharactersType from "@/types/CharactersType";
import {Divider, Stack} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: "10px",
    '&:focus-visible': {
        outline: 'none',
        boxShadow: 'none',
    },
};

interface ModalProps {
    open: boolean,
    handleClose: () => void,
    character: CharactersType;
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
                        <CardMedia
                            component="img"
                            image={character.character.images.jpg.image_url}
                            alt={character.character.name}
                            sx={{ width: '100%', height: 300, borderRadius: 1, objectFit: 'cover' }}
                        />

                        <Typography
                            variant="h5"
                            fontWeight={600}
                            textAlign="center"
                            sx={{
                                color: "var(--text-color)",
                                fontWeight: "bold",
                                fontFamily: "var(--ffamily)",
                            }}>
                            {character.character.name}
                        </Typography>

                        <Divider />

                        <Typography
                            variant="subtitle1"
                            fontWeight={500}
                            sx={{
                                color: "var(--bg-color)",
                                fontWeight: "bold",
                                fontFamily: "var(--ffamily)",
                            }}
                        >
                            Voice Actors:
                        </Typography>
                        {character?.voice_actors.length > 0 ? (
                            <Stack spacing={1}>
                                {character.voice_actors.map((va) => (
                                    <Stack
                                        key={va.person.mal_id}
                                        direction="row"
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
                                            color: "var(--text-color)",
                                            fontWeight: "bold",
                                            fontFamily: "var(--ffamily)",
                                        }}>
                                            {va.person.name} ({va.language})
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        ) : (
                            <Typography variant="body2">No voice actors available.</Typography>
                        )}
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}