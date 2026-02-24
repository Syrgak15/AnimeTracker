
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 500,
                backgroundColor: "#3871a2",
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 , color: "#FFF"}}
                placeholder="Search current season anime"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
                type="button"
                sx={{
                    p: '10px',
                    backgroundColor: "#203954",
                    color: "#FFF",
                    ":hover": {
                        backgroundColor: "#15273c"
                    }
                }}
                aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}