import React from "react";
import {UserType} from "../../redux/usersReducer";
import s from "./Users.module.css"
import axios from "axios";
import avatar from "../../img/samurai2.png"

export type UsersPropsType = {
    users: UserType[]
    onToggleSubscribe: (userId: number) => void
    onSetUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPropsType> {

    // вызывается, когда компонента вмонтировалась в разметку
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.onSetUsers(response.data.items);
            });
    }

    render() {
        const {users, onToggleSubscribe} = this.props;

        const userElements = users.map(u => {
            const subscribe = u.followed ? "UNFOLLOW" : "FOLLOW";
            const styleBtn = u.followed ? s.btn + ' ' + s.unfollow : s.btn;
            const onClickHandler = () => onToggleSubscribe(u.id);

            return (
                <div key={u.id} className={s.user}>
                    <div className={s.ava_btn}>
                        <div><img alt={''} src={u.photos.small ? u.photos.small : avatar}/></div>
                        <div><button className={styleBtn} onClick={onClickHandler}>{subscribe}</button></div>
                    </div>

                    <div className={s.info}>
                        <div className={s.name_location}>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.location}>
                                <img alt={''} src={'https://www.freeiconspng.com/uploads/google-location-icon-7.png'}></img>
                                {"Japan"}
                            </div>
                        </div>
                        <div className={s.status}>{u.status ? u.status : "no status"}</div>
                    </div>
                </div>

            );
        })

        return (
            <div className={s.content}>
                {userElements}
            </div>
        );
    }
}
