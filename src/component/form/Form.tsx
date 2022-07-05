import { TextField } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SAGA_EDIT_FORM_INTEREST,
  SAGA_EDIT_FORM_MEDIAS,
  SAGA_EDIT_FORM_TITLE,
} from "../../saga/action";
import Interests from "../interest/Interest";
import Medias from "../Medias";
import "./index.scss";

export default function Form(props: { params: string | null }) {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.formValues);
  const [formValue, setFormValue] = useState(selector);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChangeTitle = (value: string) => {
    dispatch({
      type: SAGA_EDIT_FORM_TITLE,
      payload: value,
    });
    return value;
  };

  const handleChangeInterests = (value: string) => {
    dispatch({
      type: SAGA_EDIT_FORM_INTEREST,
      payload: value,
    });
    return value;
  };

  const handleChangeMedias = (value: string) => {
    dispatch({
      type: SAGA_EDIT_FORM_MEDIAS,
      payload: value,
    });
    return value;
  };

  useEffect(() => {
    setFormValue(selector);
  }, [selector]);

  console.log("formValue :>> ", formValue);

  return (
    <div>
      <h1>{props.params ? "EDIT" : "CREATE"}</h1>
      <form className="form" id="myForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-field">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={
              (e) => handleChangeTitle(e.target.value) // [TODO]: onchange and debouce
            }
          />
        </div>
        <div className="form-field">
          <Interests onChange={handleChangeInterests} />
        </div>
        {/* <div className="form-field">
          <label>medias: </label>
          <input
            type="text"
            name="medias"
            onChange={
              (e) => handleChangeMedias(e.target.value) // [TODO]:
            }
          />
        </div> */}
        <div className="form-field">
          <label>Medias: </label>
          <Medias />
        </div>
      </form>
    </div>
  );
}
