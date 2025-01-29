import axios from "axios";

export const axiosJWT = axios.create({
  baseURL: `${process.env.REACT_APP_API_KEY}`,
  withCredentials: true,
});


export const loginUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/sign-in`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const signUpUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/sign-up`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const getAllUser = async (access_token) => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_KEY}/user/getAll`,
      {

      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDatailsUser = async (id, access_token) => {
  try {
    const res = await axiosJWT.get(

    `${process.env.REACT_APP_API_KEY}/user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = async () => {
  try {
    const res = await axios.post(

    `${process.env.REACT_APP_API_KEY}/user/refresh-token`,
    {
      withCredentials: true,
    }
  );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/log-out`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const updateUser = async (id, data) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_KEY}/user/update-user/${id}`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const deleteUser = async (id, access_token) => {
  try {
    const res = await axiosJWT.delete(
      `${process.env.REACT_APP_API_KEY}/user/delete-user/${id}`,
      {
        headers: {

        token: `Bearer ${access_token}`,
      },
    }
  );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteManyUser = async (data, access_token) => {
  try {
    const res = await axiosJWT.post(

    `${process.env.REACT_APP_API_KEY}/user/delete-many`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
