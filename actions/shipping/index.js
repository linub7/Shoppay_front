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

export const changeStateAddressHandler = async (addressId, token) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/address/manage-address`,
      { addressId },
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

export const deleteAddressHandler = async (addressId, token) => {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/address/${addressId}`,
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
