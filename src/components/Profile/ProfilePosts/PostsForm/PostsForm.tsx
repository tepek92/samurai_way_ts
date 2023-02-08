import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {FC} from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import avatar from "../../../../img/samurai2.png";
import {UserProfileType} from "../../../../redux/profileReducer";
import style from './PostsForm.module.css'
import {FormController} from "../../../common/FormController/FormController";

export type FormDataPostType = {
  postTex: string
}

type PostFormPropsType = {
  profile: UserProfileType
}

const MyPostsForm: FC<InjectedFormProps<FormDataPostType, PostFormPropsType> & PostFormPropsType> =
  ({handleSubmit, profile}) => {
    return (
      <Paper sx={{height: '100%', mb: 2}}>
        <div className={style.newPots}>
          <div className={style.title}>New post</div>
          <form onSubmit={handleSubmit}>
            <div className={style.inputBlock}>
              <div className={style.field}>
                <Avatar
                  src={profile.photos?.large ? profile.photos.large : avatar}
                  sx={{width: 30, height: 30}}
                  alt="avatar"
                  className={style.avatar}
                />
                <Field
                  component={FormController}
                  name="postTex"
                  placeholder='Enter you post'
                  multiline={true}
                ></Field>
              </div>

              <div className={style.btn}>
                <Button
                  type="submit"
                  sx={{mt: 2}}
                  variant="contained"
                  size="small" endIcon={<SendIcon/>
                }>
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Paper>
    );
  }

export const PostFormWithFom = reduxForm<FormDataPostType, PostFormPropsType>({
  form: 'posts'
})(MyPostsForm);
