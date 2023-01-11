import axios from 'axios';

export const saveCartHandler = async (cart, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/save-cart`,
      { cart },
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
