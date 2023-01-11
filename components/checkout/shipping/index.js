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
      .required('Address 2 is required.')
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
            <input type="text" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPageComponentShipping;
