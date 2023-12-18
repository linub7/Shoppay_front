import * as Yup from 'yup';
import 'yup-phone';

export const validateCategoryName = Yup.object({
  name: Yup.string()
    .required('Category name is required.')
    .min(2, 'Category name must be between 2 and 30 characters.')
    .max(30, 'Category name must be between 2 and 30 characters.')
    .matches(/^[A-Za-z ]+$/, 'Numbers and special characters are not allowed.'),
});

export const validateCreateCoupon = Yup.object({
  coupon: Yup.string()
    .required('Coupon name is required.')
    .min(2, 'Coupon name must be between 2 and 30 characters.')
    .max(20, 'Coupon name must be between 2 and 30 characters.')
    .matches(/^[A-Za-z ]+$/, 'Numbers and special characters are not allowed.'),
  discount: Yup.number()
    .required('Discount is required.')
    .min(1, 'Discount must be between 1 and 99%.')
    .max(99, 'Discount must be between 1 and 99%.'),
});

export const validateCreateProductForm = Yup.object({
  name: Yup.string()
    .required('name is required')
    .min(10, 'Product name must be between 10 and 300 characters.')
    .max(300, 'Product name must be between 10 and 300 characters.'),
  description: Yup.string().required('description is required'),
  category: Yup.string().required('category is required'),
  // subCategories: Yup.array().min(1, 'Select at least 1 subcategory'),
  brand: Yup.string().required('brand is required'),
  sku: Yup.string().required('sku is required'),
  color: Yup.string().required('color is required'),
  discount: Yup.number()
    .min(0, 'Discount must be between 0 and 99 %.')
    .max(99, 'Discount must be between 1 and 99 %.'),
});

export const validateSubCategoryName = Yup.object({
  name: Yup.string()
    .required('SubCategory name is required.')
    .min(2, 'SubCategory name must be between 2 and 30 characters.')
    .max(30, 'SubCategory name must be between 2 and 30 characters.')
    .matches(/^[A-Za-z ]+$/, 'Numbers and special characters are not allowed.'),
  parent: Yup.string().required('Please choose a category.'),
});

export const validateShipping = Yup.object({
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

export const validateCoupon = Yup.object({
  coupon: Yup.string().required('Please enter a coupon first'),
});

export const forgotPasswordValidation = Yup.object({
  email: Yup.string()
    .required('Email Address is required.')
    .email('Please enter a valid email address.'),
});

export const changePasswordValidation = Yup.object({
  currentPassword: Yup.string()
    .required('Current Password is required.')
    .min(8, 'Current Password must be between 8 and 36 characters')
    .max(36, 'Current Password must be between 8 and 36 characters'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be between 8 and 36 characters')
    .max(36, 'Password must be between 8 and 36 characters'),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is required.')
    .oneOf([Yup.ref('password')], 'Password must match.'),
});

export const resetPasswordValidation = Yup.object({
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be between 8 and 36 characters')
    .max(36, 'Password must be between 8 and 36 characters'),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is required.')
    .oneOf([Yup.ref('password')], 'Password must match.'),
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .required('Email Address is required.')
    .email('Please enter a valid email address.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 character'),
});

export const signupValidation = Yup.object({
  name: Yup.string()
    .required('What is your name?')
    .min(2, 'Name must be between 2 and 16 characters.')
    .max(16, 'Name must be between 2 and 16 characters.')
    .matches(/^[aA-zZ]/, 'Number and special characters are not allowed'),
  email: Yup.string()
    .required('Email Address is required.')
    .email('Please enter a valid email address.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be between 8 and 36 characters')
    .max(36, 'Password must be between 8 and 36 characters'),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is required.')
    .oneOf([Yup.ref('password')], 'Password must match.'),
});
