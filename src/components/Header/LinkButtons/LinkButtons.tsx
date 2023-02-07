import React, {FC} from 'react';
import style from "../Header.module.css";
import {NavLink, useLocation} from "react-router-dom";
import Button from "@mui/material/Button";

export const LinkButtons: FC = () => {

  const location = useLocation();

  const profileStyle = location.pathname === '/profile' ? 'contained' : 'outlined'
  const dialogsStyle = location.pathname === '/dialogs' ? 'contained' : 'outlined'
  const usersStyle = location.pathname === '/users' ? 'contained' : 'outlined'
  return (
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
    </nav>
  );
};
