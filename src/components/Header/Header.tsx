import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import style from './Header.module.css';
import avatar from "../../img/samurai2.png";
import Chip from '@mui/material/Chip';


export const Header: FC<HeaderPropsType> = ({
                                              login,
                                              isAuth,
                                              deleteLogin,
                                              profile,
}) => {
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
                  {/*<Tooltip title={login}>*/}
                  {/*    <IconButton sx={{mr: 1}}>*/}
                  {/*        <Avatar alt="Remy Sharp" src={profile.photos?.large ? profile.photos.large : avatar}/>*/}
                  {/*    </IconButton>*/}
                  {/*</Tooltip>*/}

                  <Chip
                      avatar={<Avatar alt="avatar" src={profile.photos?.large ? profile.photos.large : avatar}/>}
                      label={profile.fullName}
                      variant="outlined"
                  />
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