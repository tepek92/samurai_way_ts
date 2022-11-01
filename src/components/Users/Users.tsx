import React from "react";
import {UserType} from "../../redux/usersReducer";
import s from "./Users.module.css"
import {v1} from "uuid";

export type UsersPropsType = {
    users: UserType[]
    onToggleSubscribe: (userId: string) => void
    onSetUsers: (users: UserType[]) => void
}

export function Users(props: UsersPropsType) {
    const {users, onToggleSubscribe, onSetUsers} = props;

    const newUsers = [
        {
            id: v1(),
            name: 'Pasha',
            status: 'Im good!',
            location: {country: 'Russia', city: 'Krasnoobsk'},
            subscribe: false,
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
        },
        {
            id: v1(),
            name: 'Masha',
            status: 'Im beautiful!',
            location: {country: 'Russia', city: 'Novosibirsk'},
            subscribe: true,
            avatar: 'https://android-obzor.com/wp-content/uploads/2022/02/7-1.jpg'
        },
        {
            id: v1(),
            name: 'Tom',
            status: 'Ay ay ay!',
            location: {country: 'Russia', city: 'Cherepanovo'},
            subscribe: false,
            avatar: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
        },
        {
            id: v1(),
            name: 'Mustag',
            status: 'Let\'s go for a walk!!',
            location: {country: 'Russia', city: 'Sheregesh'},
            subscribe: true,
            avatar: 'https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg'
        },
    ];

    if (users.length === 0) {
        onSetUsers(newUsers);
    };

    const userElements = users.map(u => {
        const subscribe = u.subscribe ? "UNFOLLOW" : "FOLLOW";
        const styleBtn = u.subscribe ? s.btn + ' ' + s.unfollow : s.btn;
        const onClickHandler = () => onToggleSubscribe(u.id);

        return (
            <div key={u.id} className={s.user}>
                <div className={s.ava_btn}>
                    <div><img alt={''} src={u.avatar}/></div>
                    <div><button className={styleBtn} onClick={onClickHandler}>{subscribe}</button></div>
                </div>

                <div className={s.info}>
                    <div className={s.name_location}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.location}>
                            <img alt={''} src={'https://www.freeiconspng.com/uploads/google-location-icon-7.png'}></img>
                            {`${u.location.country},${u.location.city}`}
                        </div>
                    </div>
                    <div className={s.status}>{u.status}</div>
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