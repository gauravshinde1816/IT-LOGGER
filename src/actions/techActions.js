import {
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
  ADD_TECH,
  TECHS_ERROR,
} from "./types";

//get all techs

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//Add new Techs
export const addTechs = (tech) => async (dispatch) => {
  try {
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//Delete tech

export const deleteTech = (id) => async (dispatch) => {
  try {
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
//Set loading true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
