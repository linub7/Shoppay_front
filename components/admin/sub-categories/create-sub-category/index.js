import { addSubCategoryHandler } from 'actions/sub-category';
import AdminSubmitButton from 'components/shared/buttons/admin-submit-button';
import AdminInput from 'components/shared/inputs/admin-input';
import SingularSelect from 'components/shared/selects/singular-select';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import styles from '../styles.module.scss';

const AdminSubCategoriesPageComponentCreateSubCategory = ({
  setSubCategories,
  subCategoriesData,
  token,
  categories,
}) => {
  const [name, setName] = useState('');
  const [parent, setParent] = useState();
  const inputRef = useRef(null);

  const validateName = Yup.object({
    name: Yup.string()
      .required('SubCategory name is required.')
      .min(2, 'SubCategory name must be between 2 and 30 characters.')
      .max(30, 'SubCategory name must be between 2 and 30 characters.')
      .matches(
        /^[A-Za-z ]+$/,
        'Numbers and special characters are not allowed.'
      ),
    parent: Yup.string().required('Please choose a category.'),
  });

  const handleAddSubCategory = async () => {
    const { err, data } = await addSubCategoryHandler(name, parent, token);

    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    setName('');
    setParent('');
    toast.success('SubCategory created successfully.');
    setSubCategories([...subCategoriesData, data?.data?.subCategory]);
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ name, parent }}
        validationSchema={validateName}
        onSubmit={handleAddSubCategory}
      >
        {(form) => (
          <Form>
            <div className={styles.header}>Create a SubCategory</div>
            <AdminInput
              inputRef={inputRef}
              type={'text'}
              label="Name"
              name="name"
              placeholder="SubCategory Name"
              onChange={(e) => setName(e.target.value)}
            />
            <SingularSelect
              data={categories}
              name="parent"
              value={parent}
              placeholder="Select Category"
              onChange={(e) => setParent(e.target.value)}
            />
            <AdminSubmitButton btnTitle={'Create SubCategory'} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AdminSubCategoriesPageComponentCreateSubCategory;
