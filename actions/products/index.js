import axios from 'axios';

export const getAllProductsHandler = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?page=${page}`
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

export const getAllProductsDetailsHandler = async (category) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/details?category=${category}`
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const getSearchedProductsHandler = async (
  searchTerm,
  category,
  brand,
  style,
  size,
  color,
  pattern,
  material,
  gender,
  price,
  shipping,
  rating,
  sort,
  page = 1
) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/search?searchTerm=${searchTerm}&category=${category}&brand=${brand}&style=${style}&size=${size}&color=${color}&pattern=${pattern}&material=${material}&gender=${gender}&price=${price}&shipping=${shipping}&rating=${rating}&sort=${sort}&page=${page}`
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
