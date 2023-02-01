import axios from 'axios';

export const getAdminDashboardStuffHandler = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/dashboard`,
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
