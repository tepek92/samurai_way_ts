import React from "react";
import style from "./Post.module.css";

type PostPropsType = {
    text: string
    like: number
}

export function Post(props: PostPropsType) {
    const {text, like} = props;
    return (
        <div className={style.my_post}>
            <img className={style.avatar}
                 src={"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"} alt={''}/>
            <span>
                {text}
                <div className={style.like}>{like}<button>like</button></div>
            </span>
        </div>
    );
}
