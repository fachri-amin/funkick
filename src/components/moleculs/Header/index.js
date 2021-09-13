import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    Container,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';

import { Button } from '../../../components';
import css from './header.module.scss';

const navLink = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Lapangan',
        path: 'lapangan',
    },
    {
        title: 'Event',
        path: 'event',
    },
    {
        title: 'Galeri',
        path: 'galeri',
    },
    {
        title: 'Tentang Kami',
        path: 'tentang-kami',
    },
    {
        title: 'Kontak',
        path: '#kontak',
    },
    {
        title: 'Register',
        path: 'register',
    },
    
];

const MenuItem = ({ onClick, activeTitle }) => {
    return (
        <>
            {navLink.map(({title, path})=> (
                <Link to={path}>
                    <ListItem>
                        <ListItemText
                            primary={title}
                            className={`${css.navTitle} ${activeTitle === title && css.activeTitle}`}
                            onClick={() => onClick(title)}
                        />
                    </ListItem>
                </Link>
            ))}
        </>
    )
};

MenuItem.propTypes = {
    onClick: PropTypes.func,
    activeTitle: PropTypes.string,
};
MenuItem.defaultProps = {
    onClick: () => {},
    activeTitle: 'Home',
};

const Header = ({active}) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [activeTitle, setActiveTitle] = useState(active);

    const toggleDrawer = () => setOpenDrawer(!openDrawer);

    const scrollTrigger = useScrollTrigger({threshold: 50});

    return (
        <AppBar position="fixed" className={activeTitle === 'Home'? scrollTrigger ? css.headerBg : css.header : css.headerBg}>
            <Toolbar className={css.toolbar}>
                <Container className={css.navbar}>
                    <div className={css.navLeft}>
                        <div className={css.logoWrapper}>
                            <Link href="/">
                                <img
                                    src="../../assets/img/logo.png"
                                    alt="Logo funkick"
                                />
                            </Link>
                        </div>
                    </div>
                    <Hidden smDown>
                        <div className={css.navRight}>
                            <List component="nav" className={css.nav}>
                                <MenuItem
                                    onClick={(title) => setActiveTitle(title)}
                                    activeTitle={activeTitle}
                                />
                                <ListItem>
                                    <div className={css.loginWrapper}>
                                        <Button title={'Sign In'} />
                                    </div>
                                </ListItem>
                            </List>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={toggleDrawer}>
                            <MenuIcon className={css.menuIcon}/>
                        </IconButton>
                        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                            <List>
                                <MenuItem
                                    onClick={(title) => {
                                        toggleDrawer();
                                        setActiveTitle(title);
                                    }}
                                    activeTitle={activeTitle}
                                />
                                <ListItem>
                                    <div className={css.loginWrapper}>
                                        <Button title={'Sign In'} />
                                    </div>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    active: PropTypes.oneOf(['Home', 'Event', 'Galeri', 'Tentang Kami', 'Register', 'Kontak', 'Login']),
};
Header.defaultProps = {
    active: 'Home',
};

export default Header;