import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';


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
}

export default function BasicModal({open, handleClose}: ModalProps) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={style}>
                    <Typography
                        sx={{fontFamily: 'var(--ffamily)'}}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        Please sign in to add anime to your favorites.
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}