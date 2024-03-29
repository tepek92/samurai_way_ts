import React, {FC} from "react";
import s from "./Users.module.css"
import avatar from "../../img/samurai2.png"
import {UserType} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import Paper from "@mui/material/Paper";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import Button from '@mui/material/Button';

type UsersPropsType = {
  users: UserType[]
  pageSize: number
  currentPage: number
  totalUsersCount: number
  isFetching: boolean
  isFollowing: number[]
  onToggleSubscribe: (userId: number) => void
  onClickChangeCurrentPage: (page: number) => void
}


export const Users: FC<UsersPropsType> = (props) => {
  const {
    users,
    pageSize,
    currentPage,
    totalUsersCount,
    isFetching,
    isFollowing,
    onToggleSubscribe,
    onClickChangeCurrentPage,
  } = props;

  const userElements = users.map(u => {
    const subscribe = u.followed ? "UNFOLLOW" : "FOLLOW";
    const styleBtn = u.followed ? "contained" : "outlined"
    const onClickHandler = () => onToggleSubscribe(u.id);
    return (
      <Paper key={u.id} sx={{mb: 3}}>
        <div className={s.user}>
          <div className={s.ava_btn}>
            <div>
              <NavLink className={s.navLink} to={`profile/${u.id}`}>
                <img alt={''} src={u.photos.small ? u.photos.small : avatar}/>
              </NavLink>
            </div>
            <div>
              <Button
                variant={styleBtn}
                disabled={isFollowing.some(f => f === u.id)}
                onClick={onClickHandler}
                size="small"
                sx={{mt: 1}}
              >
                {subscribe}
              </Button>
            </div>
          </div>

          <div className={s.info}>
            <div className={s.name_location}>
              <div className={s.name}>{u.name}</div>
              <div className={s.location}>
                <img alt={''}
                     src={'https://www.freeiconspng.com/uploads/google-location-icon-7.png'}></img>
                {"Japan"}
              </div>
            </div>
            <div className={s.status}>{u.status ? u.status : "no status"}</div>
          </div>
        </div>
      </Paper>
    );
  })


  const paginationElements = [];
  const pageMax = Math.ceil(totalUsersCount / pageSize);
  const pageStart = currentPage - 3 <= 1 ? 1 : currentPage - 3;
  const pageEnd = currentPage + 3 >= pageMax ? pageMax : currentPage + 3;

  for (let i = pageStart; i <= pageEnd; i++) {
    const onClickHandler = (): void => onClickChangeCurrentPage(i);
    const style = i === currentPage ? s.activePage : '';
    paginationElements.push(<span key={v1()} className={style} onClick={onClickHandler}>{i} </span>);
  }

  const setStartPage = (): void => {
    onClickChangeCurrentPage(1);
  }
  const setEndPage = (): void => {
    onClickChangeCurrentPage(pageMax);
  }

  return (
    isFetching
      ? <Preloader/>
      : <div className={s.content}>
        <div className={s.pagination}>
          <span onClick={setStartPage}>
            <FirstPageIcon fontSize="small"/>
          </span>
          {paginationElements}
          <span onClick={setEndPage}>
            <LastPageIcon fontSize="small"/>
          </span>
        </div>
        {userElements}
      </div>
  );
}
