import axios from "axios"

export const getConfig = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/payment/config`)
    return res.data
  } catch (error) {
    console.log(error);
  }
}