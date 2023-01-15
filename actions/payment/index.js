import axios from 'axios';

export const payWithStripeHandler = async (orderId, amount, id, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/${orderId}/pay-with-stripe`,
      { amount, id },
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
