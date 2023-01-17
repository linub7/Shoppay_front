import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CustomDatePicker from '../date-picker';

const CustomDateLocalizationProvider = ({
  startDate,
  handleStartDate,
  endDate,
  handleEndDate,
  tomorrow,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CustomDatePicker
        label={'Start Date'}
        value={startDate}
        onChange={handleStartDate}
        minDate={new Date()}
      />
      <CustomDatePicker
        label={'End Date'}
        value={endDate}
        onChange={handleEndDate}
        minDate={tomorrow}
      />
    </LocalizationProvider>
  );
};

export default CustomDateLocalizationProvider;
