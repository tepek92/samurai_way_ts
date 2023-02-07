import React, {FC} from 'react';
import Button from "@mui/material/Button";
import {UserProfileType} from "../../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required, urlValidate} from "../../../../utils/validators/validator";
import {FormControllerMUI} from "../../../common/FormControllerMUI/FormControllerMUI";
import style from './ProfileEdit.module.css'
import {CustomCheckBox} from "./CustomCheckBox/CustomCheckBox";

type ProfileEditPropsType = {
  profile: UserProfileType
  setEditMode: (mode: boolean) => void
}

export type FromDataProfileType = {
  fullName: string
  aboutMe: string
  website: string
  github: string
  twitter: string
  instagram: string
  facebook: string
  lookingForAJob: boolean
}

const ProfileEditBody:
  FC<ProfileEditPropsType & InjectedFormProps<FromDataProfileType, ProfileEditPropsType>> =
  ({profile, handleSubmit, setEditMode}) => {
    const elements = [
      {name: 'fullName', placeholder: 'Full name', validate: required},
      {name: 'aboutMe', placeholder: 'About me', validate: required},
      {name: 'website', placeholder: 'Website', validate: urlValidate},
      {name: 'github', placeholder: 'Github', validate: urlValidate},
      {name: 'twitter', placeholder: 'Twitter', validate: urlValidate},
      {name: 'instagram', placeholder: 'Instagram', validate: urlValidate},
      {name: 'facebook', placeholder: 'Facebook', validate: urlValidate},
    ].map(field =>
      <div key={field.name} className={style.field}>
        <Field
          name={field.name}
          placeholder={field.placeholder}
          component={FormControllerMUI}
          validate={[field.validate]}
        />
      </div>
    )

    return (
      <div className={style.editBody}>
        <div className={style.title}>Enter new data</div>
        <form onSubmit={handleSubmit}>
          {elements}
          <div className={style.field}>
            <Field
              type="checkbox"
              name={'lookingForAJob'}
              component={CustomCheckBox}
            />
          </div>
          <Button type='submit' sx={{mt: 3, width: '80px'}} variant="contained">SAVE</Button>
          <Button onClick={() => setEditMode(false)} sx={{mt: 3, ml: 2, width: '80px'}} variant="outlined">CANCEL</Button>
        </form>
      </div>
    )
      ;
  };

export const ProfileEdit = reduxForm<FromDataProfileType, ProfileEditPropsType>({
  form: 'profile'
})(ProfileEditBody);
