import { Form, Formik } from 'formik';

import LoginInput from 'components/shared/inputs/login-input';
import styles from './styles.module.scss';
import AuthButton from 'components/shared/buttons/auth-button';

const ProfileSecurityPageComponentForm = ({
  currentPassword,
  password,
  passwordConfirm,
  changePasswordValidation,
  handleChangeInput,
  handleChangePassword,
}) => {
  return (
    <div className={styles.login__form}>
      <h1>Change Password</h1>
      <Formik
        enableReinitialize
        initialValues={{
          currentPassword,
          password,
          passwordConfirm,
        }}
        validationSchema={changePasswordValidation}
        onSubmit={() => handleChangePassword()}
      >
        {(form) => (
          <Form>
            <LoginInput
              type="password"
              name="currentPassword"
              value={currentPassword}
              icon={'password'}
              placeholder={'Current Password'}
              onChange={handleChangeInput}
            />
            <LoginInput
              type="password"
              name="password"
              value={password}
              icon={'password'}
              placeholder={'Password'}
              onChange={handleChangeInput}
            />
            <LoginInput
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              icon={'passwordConfirm'}
              placeholder={'Password Confirm'}
              onChange={handleChangeInput}
            />
            <AuthButton type={'submit'} btnTitle="Update" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileSecurityPageComponentForm;
