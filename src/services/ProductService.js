import axios from "axios";

export const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_API_KEY || 'http://localhost:3001'
});

export const getAllProduct = async (search, limit) => {
    try {
        let res = {}
        if (search) {
            res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all?filter=name&filter=${search}&limit=${limit}`)

    } else {
        res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all?limit=${limit}`)
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductType = async (type, page, limit) => {
  try {
    if (type) {

        const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (data) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_KEY}/product/create`, data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const getDetailProduct = async (id) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-details/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const updateProduct = async (id, access_token, data) => {
    try {
        const res = await axiosJWT.put(`${process.env.REACT_APP_API_KEY}/product/update/${id}`, data, {
            headers: {
                token: `Bearer ${access_token}`

        }
    })
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id, access_token) => {
  try {
    const res = await axiosJWT.delete(
      `${process.env.REACT_APP_API_KEY}/product/delete/${id}`,
      {

        headers: {
            token: `Bearer ${access_token}`
        }
    })
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const deleteManyProduct = async (data, access_token) => {
    try {
        const res = await axiosJWT.post(`${process.env.REACT_APP_API_KEY}/product/delete-many`, data, {
            headers: {
                token: `Bearer ${access_token}`

        }
    })
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTypeProduct = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all-type`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};