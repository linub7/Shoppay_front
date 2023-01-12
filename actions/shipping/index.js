import axios from 'axios';

export const saveShippingInfosHandler = async (address, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/address`,
      { address },
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
