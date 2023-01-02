import AuthButton from 'components/shared/buttons/auth-button';
import LoginInput from 'components/shared/inputs/login-input';
import { Form, Formik } from 'formik';

const ResetPasswordForm = ({
  password,
  passwordConfirm,
  resetPasswordValidation,
  handleResetPassword,
  handleChangeInput,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        password,
        passwordConfirm,
      }}
      validationSchema={resetPasswordValidation}
      onSubmit={() => handleResetPassword()}
    >
      {(form) => (
        <Form>
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
          <AuthButton type={'submit'} btnTitle="Change Password" />
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
