import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Skeleton() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fill: "#FFF" }}>
            <CircularProgress color="secondary"/>
        </Box>
    );
}