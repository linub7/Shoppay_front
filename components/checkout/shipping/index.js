import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ShippingInput from 'components/shared/inputs/shipping-input';
import { countries } from 'constants';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import styles from './styles.module.scss';

const initialValue = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address1: '',
  address2: '',
  city: '',
  zipCode: '',
  state: '',
  country: '',
};
const CheckoutPageComponentShipping = ({
  setSelectedAddress,
  selectedAddress,
  user,
}) => {
  const [addresses, setAddresses] = useState(user?.addresses || []);
  const [shipping, setShipping] = useState(initialValue);
  const {
    firstName,
    lastName,
    phoneNumber,
    address1,
    address2,
    city,
    zipCode,
    state,
    country,
  } = shipping;

  const validateShipping = Yup.object({
    firstName: Yup.string()
      .required('First name is required.')
      .min(3, 'First name must be at least 3 characters.')
      .max(20, 'First name must be less than 20 characters.'),
    lastName: Yup.string()
      .required('Last name is required.')
      .min(3, 'Last name must be at least 3 characters.')
      .max(20, 'Last name must be less than 20 characters.'),
    phoneNumber: Yup.string()
      .required('Phone number is required.')
      .phone()
      .min(3, 'Phone number must be at least 3 characters.')
      .max(30, 'Phone number must be less than 30 characters.'),
    address1: Yup.string()
      .required('Address 1 is required.')
      .min(5, 'Address 1 must be at least 5 characters.')
      .max(100, 'Address 1 must be less than 100 characters.'),
    address2: Yup.string()
      .min(5, 'Address 2 must be at least 5 characters.')
      .max(100, 'Address 2 must be less than 100 characters.'),
    city: Yup.string()
      .required('city is required.')
      .min(2, 'city must be at least 2 characters.')
      .max(60, 'city must be less than 60 characters.'),
    zipCode: Yup.string()
      .required('Zip code is required.')
      .min(2, 'Zip code must be at least 2 characters.')
      .max(30, 'Zip code must be less than 30 characters.'),
    state: Yup.string()
      .required('State is required.')
      .min(2, 'State must be at least 2 characters.')
      .max(60, 'State must be less than 60 characters.'),
    country: Yup.string()
      .required('country is required.')
      .min(2, 'country must be at least 2 characters.')
      .max(60, 'country must be less than 60 characters.'),
  });

  const handleChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    setShipping({ ...shipping, [name]: value });
  };

  return (
    <div className={styles.shipping}>
      <Formik
        enableReinitialize
        initialValues={{
          firstName,
          lastName,
          phoneNumber,
          address1,
          address2,
          city,
          zipCode,
          state,
          country,
        }}
        validationSchema={validateShipping}
      >
        {(formik) => (
          <Form>
            <FormControl className={styles.select}>
              <InputLabel id="demo-simple-select-helper-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={country}
                name="country"
                onChange={handleChangeInput}
              >
                {countries.map((el, index) => (
                  <MenuItem value={el.name} key={index}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className={styles.col}>
              <ShippingInput
                name={'firstName'}
                placeholder={'First Name'}
                value={firstName}
                onChange={handleChangeInput}
              />
              <ShippingInput
                name={'lastName'}
                placeholder={'Last Name'}
                value={lastName}
                onChange={handleChangeInput}
              />
            </div>
            <div className={styles.col}>
              <ShippingInput
                name={'state'}
                placeholder={'State/Province'}
                value={state}
                onChange={handleChangeInput}
              />
              <ShippingInput
                name={'city'}
                placeholder={'City'}
                value={city}
                onChange={handleChangeInput}
              />
            </div>
            <ShippingInput
              name={'phoneNumber'}
              placeholder={'Phone Number'}
              value={phoneNumber}
              onChange={handleChangeInput}
            />
            <ShippingInput
              name={'zipCode'}
              placeholder={'Zip Code/Postal Code'}
              value={zipCode}
              onChange={handleChangeInput}
            />
            <ShippingInput
              name={'address1'}
              placeholder={'Address 1'}
              value={address1}
              onChange={handleChangeInput}
            />
            <ShippingInput
              name={'address2'}
              placeholder={'Address 2'}
              value={address2}
              onChange={handleChangeInput}
            />
            <button type="submit">Save Address</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPageComponentShipping;
