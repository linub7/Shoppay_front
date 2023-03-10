import axios from 'axios';

export const signupHandler = async (name, email, password, passwordConfirm) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
      { name, email, password, passwordConfirm }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const signinHandler = async (email, password) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`,
      { email, password }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const forgotPasswordHandler = async (email) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`,
      { email }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const resetPasswordHandler = async (
  password,
  passwordConfirm,
  token
) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password/${token}`,
      { password, passwordConfirm }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data?.message };
  }
};

export const signoutHandler = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signout`,
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

export const getMeHandler = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`,
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

export const changePasswordHandler = async (
  currentPassword,
  password,
  passwordConfirm,
  token
) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/update-my-password`,
      { currentPassword, password, passwordConfirm },
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
