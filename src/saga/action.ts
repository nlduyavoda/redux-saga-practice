export const SAGA_EDIT_FORM_TITLE = "SAGA_EDIT_FORM_TITLE";
export const SAGA_EDIT_FORM_INTEREST = "SAGA_EDIT_FORM_INTEREST";
export const SAGA_EDIT_FORM_MEDIAS = "SAGA_EDIT_FORM_MEDIAS";
export const SAGA_ADD_MEDIAS = "SAGA_ADD_MEDIAS";

export const editFormTitle = ({
  action,
  payload,
}: {
  action: any;
  payload: any;
}) => {
  return {
    type: action,
    payload: payload,
  };
};

export const editFormInterests = ({
  action,
  payload,
}: {
  action: any;
  payload: any;
}) => {
  return {
    type: action,
    payload: payload,
  };
};

export const editFormMedias = ({
  action,
  payload,
}: {
  action: any;
  payload: any;
}) => {
  return {
    type: action,
    payload: payload,
  };
};

export const addFormMedias = ({
  action,
  payload,
}: {
  action: any;
  payload: any;
}) => {
  return {
    type: action,
    payload: payload,
  };
};
