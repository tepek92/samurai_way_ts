import React from "react";
import {UserType} from "../../redux/usersReducer";
import s from "./Users.module.css"
import axios from "axios";
import avatar from "../../img/samurai2.png"
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;
type UserResponseType = {
    items: UserType[]
    totalCount: number
    error: null
}

export class Users extends React.Component<UsersPropsType> {

    // вызывается, когда компонента вмонтировалась в разметку
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                const data: UserResponseType = response.data;
                this.props.onSetUsers(data.items);
                this.props.onSetTotalUsersCount(data.totalCount);
            });
    }

    onClickChangeCurrentPage = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items);
            });
        this.props.onChangeCurrenPage(page);
    }

    render() {
        const {users, pageSize, currentPage, totalUsersCount, onToggleSubscribe} = this.props;

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
        const pageStart = currentPage - 3 <= 0 ? 0 : currentPage - 3;
        const pageEnd = currentPage + 3 >= pageMax ? pageMax : currentPage + 3;

        for (let i = pageStart; i <= pageEnd; i++) {
            const onClickHandler = (): void => this.onClickChangeCurrentPage(i);
            const style = i === currentPage ? s.activePage : '';
            paginationElements.push(<span className={style} onClick={onClickHandler}>{i} </span>);
        }

        const setStartPage = (): void => {
            this.onClickChangeCurrentPage(0);
        }
        const setEndPage = (): void => {
            this.onClickChangeCurrentPage(pageMax);
        }

        return (
            <div className={s.content}>
                <div className={s.pagination}>
                    <span onClick={setStartPage}>&laquo;</span>
                    {paginationElements}
                    <span onClick={setEndPage}>&raquo;</span>
                </div>
                {userElements}
            </div>
        );
    }
}
