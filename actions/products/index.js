import axios from 'axios';

export const getAllProductsHandler = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getSingleProductHandler = async (id, style, size) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}?style=${style}&size=${size}`
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getAllProductsNameAndSubProductsHandler = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/name-sub`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const createProductHandler = async (payload, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
