import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useBasket } from "../context/BasketProvider";

export const NavigationBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { items } = useBasket();


    return (
        <AppBar position="static" sx={{ background: "black" }}>
            <Drawer
                anchor="top"
                open={isOpen}
                onClose={() => {
                    setIsOpen(false)
                }}
            >
                <List sx={{ justifyContent: "centre", }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/");
                            setIsOpen(false)
                        }}>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/wish-list");
                            setIsOpen(false)
                        }}>
                            <ListItemText primary="Wish List" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => {
                                setIsOpen(true)
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button
                            sx={{ my: 2, color: "white", display: "block" }}
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Button>

                        <Button
                            sx={{ my: 2, color: "white", display: "block" }}
                            onClick={() => {
                                navigate("/wish-list");
                            }}
                        >
                            Wish List
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                            onClick={() => {
                                navigate("/checkout");
                            }}
                        >
                            <Badge badgeContent={items.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};