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

export const getSingleProductHandler = async (slug, style, size) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${slug}?style=${style}&size=${size}`
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};
