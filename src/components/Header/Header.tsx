import React, {FC} from 'react';
import {NavLink, useLocation, useRouteMatch} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import style from './Header.module.css';
import avatar from "../../img/samurai2.png";
import Chip from '@mui/material/Chip';


export const Header: FC<HeaderPropsType> = ({
                                              login,
                                              isAuth,
                                              deleteLogin,
                                              profile,
                                            }) => {
  const location = useLocation();
  const logoutHandler = () => {
    deleteLogin();
  }

  const profileStyle = location.pathname === '/profile' ? 'contained' : 'outlined'
  const dialogsStyle = location.pathname === '/dialogs' ? 'contained' : 'outlined'
  const usersStyle = location.pathname === '/users' ? 'contained' : 'outlined'

  return (
    <Box>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <nav className={style.nav}>
            <NavLink
              to={"/profile"}
              activeClassName={style.active}>
              <Button
                variant={profileStyle}
                sx={{ml: 2}}
              >
                Profile
              </Button>
            </NavLink>

            <NavLink
              to={"/dialogs"}
              activeClassName={style.active}
            >
              <Button
                variant={dialogsStyle}
                sx={{ml: 2}}
              >
                Messages
              </Button>
            </NavLink>

            <NavLink
              to={"/users"}
              activeClassName={style.active}
            >
              <Button
                variant={usersStyle}
                sx={{ml: 2}}
              >
                Users
              </Button>
            </NavLink>
          </nav>
          {isAuth &&
              <Box sx={{marginLeft: 'auto'}}>
                  <Chip
                      avatar={<Avatar alt="avatar" src={profile.photos?.large ? profile.photos.large : avatar}/>}
                      label={profile.fullName}
                      variant="outlined"
                  />
                  <Button
                      variant='outlined'
                      onClick={logoutHandler}
                      sx={{ml: 2}}
                  >
                      Logout
                  </Button>
              </Box>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}