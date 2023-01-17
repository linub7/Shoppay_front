import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const CustomDatePicker = ({ label, value, onChange, minDate }) => {
  return (
    <DesktopDatePicker
      label={label}
      inputFormat={'MM/dd/yyyy'}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
      minDate={minDate}
    />
  );
};

export default CustomDatePicker;
