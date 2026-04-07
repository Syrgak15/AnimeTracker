import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';

export default function TemporaryDrawer({headerLinks}: {headerLinks: {name: string, href: string}[]}) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Box
                    component="div"
                    sx={{
                        paddingLeft: "10px"
                    }}
                >
                    <CloseIcon fontSize="small"/>
                </Box>
                {headerLinks.map((link, index) => (
                    <ListItem key={index}>
                        <Link
                            style={{ textDecoration: 'none' }}
                            href={link.href}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: {
                                        color: 'var(--text-color)',
                                        textDecoration: 'none',
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        fontFamily: 'var(--ffamily)'
                                    }
                                }}
                            >
                                {link.name}
                            </ListItemText>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}