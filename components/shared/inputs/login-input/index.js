import { ErrorMessage, useField } from 'formik';
import {
  IoFingerPrintOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
} from 'react-icons/io5';

import styles from './styles.module.scss';

const LoginInput = ({ icon, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ''
      }`}
    >
      {icon === 'user' ? (
        <IoPersonOutline />
      ) : icon === 'email' ? (
        <IoMailOutline />
      ) : icon === 'password' ? (
        <IoLockClosedOutline />
      ) : icon === 'passwordConfirm' ? (
        <IoFingerPrintOutline />
      ) : (
        ''
      )}
      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className={styles.error__popup}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
};

export default LoginInput;
