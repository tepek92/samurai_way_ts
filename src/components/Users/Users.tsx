import React from "react";
import s from "./Users.module.css"
import avatar from "../../img/samurai2.png"
import {UserType} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader/Preloader";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    onToggleSubscribe: (userId: number) => void
    onSetUsers: (users: UserType[]) => void
    onClickChangeCurrentPage: (page: number) => void
}


export function Users(props: UsersPropsType) {
    const {
        users,
        pageSize,
        currentPage,
        totalUsersCount,
        isFetching,
        onToggleSubscribe,
        onClickChangeCurrentPage,
    } = props;

    const userElements = users.map(u => {
        const subscribe = u.followed ? "UNFOLLOW" : "FOLLOW";
        const styleBtn = u.followed ? s.btn + ' ' + s.unfollow : s.btn;
        const onClickHandler = () => onToggleSubscribe(u.id);

        return (
            <div key={u.id} className={s.user}>
                <div className={s.ava_btn}>
                    <div><img alt={''} src={u.photos.small ? u.photos.small : avatar}/></div>
                    <div>
                        <button className={styleBtn} onClick={onClickHandler}>{subscribe}</button>
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
        );
    })


    const paginationElements = [];
    const pageMax = Math.ceil(totalUsersCount / pageSize);
    const pageStart = currentPage - 3 <= 1 ? 1 : currentPage - 3;
    const pageEnd = currentPage + 3 >= pageMax ? pageMax : currentPage + 3;

    for (let i = pageStart; i <= pageEnd; i++) {
        const onClickHandler = (): void => onClickChangeCurrentPage(i);
        const style = i === currentPage ? s.activePage : '';
        paginationElements.push(<span className={style} onClick={onClickHandler}>{i} </span>);
    }

    const setStartPage = (): void => {
        onClickChangeCurrentPage(1);
    }
    const setEndPage = (): void => {
        onClickChangeCurrentPage(pageMax);
    }

    return (
        isFetching
            ? <Preloader />
            : <div className={s.content}>
                <div className={s.pagination}>
                    <span onClick={setStartPage}>&laquo;</span>
                    {paginationElements}
                    <span onClick={setEndPage}>&raquo;</span>
                </div>
                {userElements}
            </div>
    );
}
