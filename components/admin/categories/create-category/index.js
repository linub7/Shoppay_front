import { Form, Formik } from 'formik';
import { useCallback, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

import { addCategoryHandler } from 'actions/category';
import AdminSubmitButton from 'components/shared/buttons/admin-submit-button';
import AdminInput from 'components/shared/inputs/admin-input';
import styles from './styles.module.scss';
import { validateCategoryName } from 'utils/formValidations';

const AdminCategoriesPageComponentCreateCategory = ({
  setCategories,
  token,
  categoriesData,
}) => {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  // const validateName = Yup.object({
  //   name: Yup.string()
  //     .required('Category name is required.')
  //     .min(2, 'Category name must be between 2 and 30 characters.')
  //     .max(30, 'Category name must be between 2 and 30 characters.')
  //     .matches(
  //       /^[A-Za-z ]+$/,
  //       'Numbers and special characters are not allowed.'
  //     ),
  // });

  const handleAddCategory = useCallback(async () => {
    const { err, data } = await addCategoryHandler(name, token);

    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    setCategories([...categoriesData, data?.data?.category]);
    inputRef.current.blur();
    setName('');
    toast.success('Category created successfully 👍.');
  }, [categoriesData, name, token]);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ name }}
        validationSchema={validateCategoryName}
        onSubmit={handleAddCategory}
      >
        {(form) => (
          <Form>
            <div className={styles.header}>Create a Category</div>
            <AdminInput
              inputRef={inputRef}
              type={'text'}
              label="Name"
              name="name"
              placeholder="Category Name"
              onChange={(e) => setName(e.target.value)}
            />
            <AdminSubmitButton btnTitle={'Create Category'} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AdminCategoriesPageComponentCreateCategory;
