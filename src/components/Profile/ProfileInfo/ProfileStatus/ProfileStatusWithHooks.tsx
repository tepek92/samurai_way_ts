import React, {ChangeEvent, useEffect, useState} from 'react'


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

type LocalStateType = {
    editMode: boolean
    status: string
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    console.log(props.status)
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deActiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <p>
            <b>Статус: </b>
            {!editMode && <span onDoubleClick={activeEditMode}>{props.status ? props.status : "Нет статуса:("}</span>}
            {editMode && <input onChange={onChangeStatus} onBlur={deActiveEditMode} autoFocus={true} value={status}/>}
        </p>
    );
}
