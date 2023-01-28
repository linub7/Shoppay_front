/* eslint-disable @next/next/no-img-element */
import AdminSubmitButton from 'components/shared/buttons/admin-submit-button';
import MultipleSelect from 'components/shared/selects/multiple-select';
import SingularSelect from 'components/shared/selects/singular-select';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles.module.scss';
import AdminCreateProductPageComponentFormBasicInfos from './basic-infos';
import AdminCreateProductPageComponentFormColors from './colors';
import AdminCreateProductPageComponentFormDetails from './details';
import AdminCreateProductPageComponentFormImages from './images';
import AdminCreateProductPageComponentFormQuestions from './questions';
import AdminCreateProductPageComponentFormSizes from './sizes';
import AdminCreateProductPageComponentFormStyle from './style';

const AdminCreateProductPageComponentForm = ({
  product,
  handleSubmit,
  images,
  setImages,
  colorImage,
  setColorImage,
  parents,
  handleChange,
  categories,
  subs,
  selectedSubs,
  setSelectedSubs,
  setProduct,
}) => {
  const validate = Yup.object({
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

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: product?.name,
        brand: product?.brand,
        description: product?.description,
        category: product?.category,
        subCategories: product?.subCategories,
        parent: product?.parent,
        sku: product?.sku,
        discount: product?.discount,
        color: product?.color?.color,
        imageInputFile: '',
        styleInput: '',
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <AdminCreateProductPageComponentFormImages
            name="imageInputFile"
            header="Product Carousel Images"
            text="Add images"
            images={images}
            setImages={setImages}
            setColorImage={setColorImage}
          />
          <div className={styles.d_flex} style={{ margin: '1rem 0' }}>
            {product?.color?.image && (
              <img
                src={product?.color?.image}
                alt="product color image"
                className={styles.image_span}
              />
            )}
            {product?.color?.color && (
              <span
                className={styles.color_span}
                style={{
                  background: `${product?.color?.color}`,
                  marginTop: '1rem',
                }}
              ></span>
            )}
          </div>
          <AdminCreateProductPageComponentFormStyle
            name="colorImageInput"
            product={product}
            setProduct={setProduct}
            colorImage={colorImage}
            header={'Pick a product style image'}
            text="Pick Style"
          />
          <AdminCreateProductPageComponentFormColors
            name="color"
            product={product}
            setProduct={setProduct}
            colorImage={colorImage}
          />
          <SingularSelect
            name="parent"
            value={product?.parent}
            label="parent"
            data={parents}
            placeholder="Select a parent product"
            onChange={handleChange}
          />
          <SingularSelect
            name="category"
            value={product?.category}
            label="Category"
            data={categories}
            placeholder="Select a category"
            onChange={handleChange}
            disabled={product?.category}
          />
          {product?.category && (
            <MultipleSelect
              validate={product?.subCategories}
              data={subs}
              header="Select SubCategories"
              name="subCategories"
              disabled={product?.parent}
              onChange={handleChange}
              selectedSubs={selectedSubs}
              setSelectedSubs={setSelectedSubs}
              setProduct={setProduct}
              product={product}
            />
          )}
          <AdminCreateProductPageComponentFormBasicInfos
            handleChange={handleChange}
          />
          <AdminCreateProductPageComponentFormSizes
            sizes={product?.sizes}
            product={product}
            setProduct={setProduct}
          />
          <AdminCreateProductPageComponentFormDetails
            details={product?.details}
            product={product}
            setProduct={setProduct}
          />
          <AdminCreateProductPageComponentFormQuestions
            questions={product?.questions}
            product={product}
            setProduct={setProduct}
          />
          <AdminSubmitButton btnTitle={'Create Product'} />
        </Form>
      )}
    </Formik>
  );
};

export default AdminCreateProductPageComponentForm;
