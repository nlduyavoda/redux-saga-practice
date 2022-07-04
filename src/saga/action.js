export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const POST_FORM_VALUES = "POST_FORM_VALUES"
export const SAGA_POST_FORM_VALUES = "SAGA_POST_FORM_VALUES";


export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getPostsSuccess = (props) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: props,
  };
};

export const postFormValues = ({ action, payload }) => {
  return {
    type: action,
    payload: payload,
  };
};
