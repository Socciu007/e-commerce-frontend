import axios from "axios";

export const getAllBlogs = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/blog/get-all`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailBlogs = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_KEY}/store/get-details${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const createBlog = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/blog/create-blog`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const updateBlog = async (id, data) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_KEY}/blog/update-blog/${id}`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/blog/delete-blog/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
