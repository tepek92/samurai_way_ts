import React, {FC} from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {FormControllerType} from "../../../../common/FormControllerMUI/FormControllerMUI";


export const CustomCheckBox: FC<FormControllerType> = (props) => {

  const {
    input: { value, onChange }
  } = props

  return (

    <FormControlLabel
      label="Looking for a job"
      control={
      <Checkbox
        checked={!!value}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />}
    />
  );
};

