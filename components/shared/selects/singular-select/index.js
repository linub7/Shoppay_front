import { MenuItem, TextField } from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import styles from './styles.module.scss';

const SingularSelect = ({ placeholder, onChange, data, ...rest }) => {
  const [field, meta] = useField(rest);
  return (
    <div style={{ marginBottom: '1rem' }}>
      <TextField
        variant="outlined"
        name={field.name}
        select
        label={placeholder}
        value={field.value}
        onChange={onChange}
        className={`${styles.select} ${
          meta.touched && meta.error ? styles.error__select : ''
        }`}
      >
        <MenuItem key={''} value={''}>
          No Selected / Or empty
        </MenuItem>
        {data?.map((el, index) => (
          <MenuItem key={el._id} value={el._id || el.name}>
            {el.name}
          </MenuItem>
        ))}
      </TextField>
      {meta.touched && meta.error && (
        <p className={styles.error__msg}>
          <ErrorMessage name={field.name} />
        </p>
      )}
    </div>
  );
};

export default SingularSelect;
