import axios from "axios";

export const FETCH_OFFWORK_REQUEST = "FETCH_OFFWORK_REQUEST";
export const FETCH_OFFWORK_SUCCESS = "FETCH_OFFWORK_SUCCESS";
export const FETCH_OFFWORK_FAILURE = "FETCH_OFFWORK_FAILURE";

const headers = {
  "ngrok-skip-browser-warning": true,
};
const baseUrl = "https://f8b4-180-244-135-60.ngrok-free.app/api/offwork";

const fetOffworkRequest = () => {
  return {
    type: FETCH_OFFWORK_REQUEST,
  };
};

const fetOffworkSuccess = (data, message) => {
  return {
    type: FETCH_OFFWORK_SUCCESS,
    payload: {
      message: message,
      data: data,
    },
  };
};

const fetOffworkFailure = (error) => {
  return {
    type: FETCH_OFFWORK_FAILURE,
    payload: error,
  };
};

export const fetchOffworkList = () => {
  return async (dispatch) => {
    try {
      dispatch(fetOffworkRequest());
      const res = await axios.get(baseUrl, { headers });
      dispatch(fetOffworkSuccess(res.data));
    } catch (err) {
      dispatch(fetOffworkFailure(err));
    }
  };
};

export const createOffworkList = (
  name,
  position,
  start_date,
  end_date,
  status
) => {
  return async (dispatch) => {
    try {
      dispatch(fetOffworkRequest());
      const resCreate = await axios.post(
        `${baseUrl}/create`,
        { name, position, start_date, end_date, status },
        { headers }
      );
      const res = await axios.get(baseUrl, { headers });
      dispatch(fetOffworkSuccess(res.data, resCreate.data.message));
    } catch (err) {
      dispatch(fetOffworkFailure(err));
    }
  };
};

export const updateOffworkList = (id, status) => {
  return async (dispatch) => {
    try {
      dispatch(fetOffworkRequest());
      const resUpdate = await axios.patch(
        `${baseUrl}/changestatus/${id}`,
        { status },
        { headers }
      );
      const res = await axios.get(baseUrl, { headers });
      dispatch(fetOffworkSuccess(res.data, resUpdate.data.message));
    } catch (err) {
      dispatch(fetOffworkFailure(err));
    }
  };
};
