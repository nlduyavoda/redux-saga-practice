import { useState } from "react";
import { useDispatch } from "react-redux";
import { GET_POSTS, POST_FORM_VALUES, postFormValues } from "../../saga/action";
import "./index.scss";

export default function Form(props: { params: string | null }) {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    title: "",
    interest: "",
    medias: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postFormValues({
        action: POST_FORM_VALUES,
        payload: formValue,
      })
    );
  };
  return (
    <div>
      <h1>{props.params ? "EDIT" : "CREATE"}</h1>
      <form id="myForm" onSubmit={(e) => handleSubmit(e)}>
        <label>title: </label>
        <input
          type="text"
          name="title"
          onChange={(e) =>
            setFormValue({ ...formValue, title: e.target.value })
          }
        />
        <label>interest: </label>
        <input
          type="text"
          name="interest"
          onChange={(e) =>
            setFormValue({ ...formValue, interest: e.target.value })
          }
        />
        <label>medias: </label>
        <input
          type="text"
          name="medias"
          onChange={(e) =>
            setFormValue({ ...formValue, medias: e.target.value })
          }
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
