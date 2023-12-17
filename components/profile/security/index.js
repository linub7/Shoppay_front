import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { changePasswordHandler, signoutHandler } from 'actions/auth';
import CustomDotLoader from 'components/shared/loaders/custom-dot-loader';
import { authenticate } from 'store/slices/authSlice';
import ProfilePageComponentHeader from '../header';
import ProfilePageComponentLayout from '../layout';
import ProfileSecurityPageComponentForm from './form';
import { changePasswordValidation } from 'utils/formValidations';

const ProfileSecurityPageComponent = ({ me, tab }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  });
  const { currentPassword, password, passwordConfirm } = user;

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // const changePasswordValidation = Yup.object({
  //   currentPassword: Yup.string()
  //     .required('Current Password is required.')
  //     .min(8, 'Current Password must be between 8 and 36 characters')
  //     .max(36, 'Current Password must be between 8 and 36 characters'),
  //   password: Yup.string()
  //     .required('Password is required.')
  //     .min(8, 'Password must be between 8 and 36 characters')
  //     .max(36, 'Password must be between 8 and 36 characters'),
  //   passwordConfirm: Yup.string()
  //     .required('Password Confirmation is required.')
  //     .oneOf([Yup.ref('password')], 'Password must match.'),
  // });

  const handleChangeInput = (e) => {
    const {
      target: { value, name },
    } = e;
    setUser({ ...user, [name]: value });
  };

  const handleChangePassword = async () => {
    setLoading(true);
    const { err, data } = await changePasswordHandler(
      currentPassword,
      password,
      passwordConfirm,
      token
    );
    if (err) {
      setLoading(false);
      console.log(err);
      toast.error(err);
      return;
    }

    setLoading(false);
    toast.success('Your password changed successfully, Please login again');
    setTimeout(async () => {
      const { data: signoutData, err: signoutError } = await signoutHandler(
        token
      );
      if (signoutError) {
        console.log(signoutError);
        toast.error(signoutError);
        return;
      }
      Cookies.remove('userData');
      dispatch(authenticate({ token: null, userData: null }));
      window.location.href = '/auth/signin';
    }, 2000);
  };

  return (
    <ProfilePageComponentLayout me={me} tab={tab}>
      {loading && <CustomDotLoader loading={loading} />}
      <ProfileSecurityPageComponentForm
        currentPassword={currentPassword}
        password={password}
        passwordConfirm={passwordConfirm}
        changePasswordValidation={changePasswordValidation}
        handleChangeInput={handleChangeInput}
        handleChangePassword={handleChangePassword}
      />
    </ProfilePageComponentLayout>
  );
};

export default ProfileSecurityPageComponent;
