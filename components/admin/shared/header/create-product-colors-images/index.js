/* eslint-disable @next/next/no-img-element */
import { ErrorMessage } from 'formik';
import styles from './styles.module.scss';

const CreateProductColorsImagesHeader = ({ meta, header, field }) => {
  return (
    <div
      className={`${styles.header} ${meta.error ? styles.header__error : ''}`}
    >
      <div className={styles.flex}>
        {meta.error && <img src="/images/error-icon.png" alt="icon" />}
        {header}
      </div>
      <span>
        {meta.touched && meta.error && (
          <div className={styles.error__msg}>
            <span></span>
            <ErrorMessage name={field.name} />
          </div>
        )}
      </span>
    </div>
  );
};

export default CreateProductColorsImagesHeader;
