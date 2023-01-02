import AuthButton from 'components/shared/buttons/auth-button';
import LoginInput from 'components/shared/inputs/login-input';
import { Form, Formik } from 'formik';
import styles from '../styles.module.scss';

const ForgotPasswordForm = ({
  email,
  forgotPasswordValidation,
  handleSendRequest,
  handleChangeInput,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        email,
      }}
      validationSchema={forgotPasswordValidation}
      onSubmit={() => handleSendRequest()}
    >
      {(form) => (
        <Form>
          <LoginInput
            type="email"
            name="email"
            value={email}
            icon={'email'}
            placeholder={'Email Address'}
            onChange={handleChangeInput}
          />

          <AuthButton type={'submit'} btnTitle="Send Request" />
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
