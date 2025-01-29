import axios from "axios";

export const createCode = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/store/create-code`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createStore = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/store/create-store`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};