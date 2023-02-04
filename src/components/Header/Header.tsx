import React, {FC, useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import style from './Navbar.module.css';


export const Header: FC<HeaderPropsType> = ({login, isAuth, deleteLogin}) => {
  const logoutHandler = () => {
    deleteLogin();
  }
  return (
    <Box>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <nav className={style.nav}>
            <div className={style.link}><NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink></div>
            <div className={style.link}><NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink></div>
            <div className={style.link}><NavLink to={"/users"} activeClassName={style.active}>Users</NavLink></div>
          </nav>
          {isAuth &&
              <Box sx={{marginLeft: 'auto'}}>
                  <Tooltip title={login}>
                      <IconButton sx={{p: 0}}>
                          <Avatar alt="Remy Sharp" src="https://www.picng.com/upload/aikido/png_aikido_55913.png"/>
                      </IconButton>
                  </Tooltip>
                  <Button
                      color="inherit"
                      onClick={logoutHandler}
                  >
                      Logout
                  </Button>
              </Box>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}