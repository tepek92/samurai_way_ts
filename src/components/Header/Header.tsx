import React, {FC} from 'react';
import {HeaderPropsType} from "./HeaderContainer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import avatar from "../../img/samurai2.png";
import Chip from '@mui/material/Chip';
import {LinkButtons} from "./LinkButtons/LinkButtons";


export const Header: FC<HeaderPropsType> =
  ({
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
            <LinkButtons/>
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