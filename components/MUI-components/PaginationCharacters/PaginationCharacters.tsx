import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationCharactersProps = {
    amountOfPages: number;
    currentPage: number;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function PaginationCharacters({amountOfPages, currentPage, onChange} : PaginationCharactersProps) {
    return (
        <Stack>
            <Pagination
                page={currentPage}
                onChange={onChange}
                count={amountOfPages}
                variant="outlined"
                shape="rounded"
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#fff',
                        backgroundColor: '#643dc7',
                        fontWeight: 'bold',
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        color: '#fff',
                    },
                    '& .MuiPaginationItem-root:hover': {
                        backgroundColor: '#8561f1',
                    }
                }}
            />
        </Stack>
    );
}