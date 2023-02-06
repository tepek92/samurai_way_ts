import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import style from '../ProfileBlock.module.css'


type ProfileStatusType = {
  status: string
  isMe: boolean
  updateStatus: (status: string) => void
}


export const ProfileStatus: FC<ProfileStatusType> = ({status, isMe, updateStatus}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setCurrentStatus(status)
  }, [status])

  const activeEditMode = () => {
    setEditMode(true);
  }

  const deActiveEditMode = () => {
    setEditMode(false);
    updateStatus(currentStatus);
  }

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(e.currentTarget.value);
  }


  return (
    isMe
      ? <div className={style.meStatus}>
        {!editMode && <span
            onDoubleClick={activeEditMode}
        >
                {status ? status : "Нет статуса:("}
            </span>}
        {editMode && <TextField variant="standard" size="small" onChange={onChangeStatus} onBlur={deActiveEditMode}
                                autoFocus={true} value={currentStatus}/>}
      </div>
      : <div className={style.status}>{status ? status : "Нет статуса:("}</div>

  );
}
