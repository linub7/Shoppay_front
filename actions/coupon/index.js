import axios from 'axios';

export const createCoupon = async (
  coupon,
  startDate,
  endDate,
  discount,
  token
) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/coupons`,
      { coupon, startDate, endDate, discount },
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
