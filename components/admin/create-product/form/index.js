/* eslint-disable @next/next/no-img-element */
import MultipleSelect from 'components/shared/selects/multiple-select';
import SingularSelect from 'components/shared/selects/singular-select';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles.module.scss';

const AdminCreateProductPageComponentForm = ({
  product,
  handleSubmit,
  images,
  setImages,
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
    name: Yup.string().required('name is required'),
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
          {/* <Images
            name="imageInputFile"
            header="Product Carousel Images"
            text="Add images"
            images={images}
            setImages={setImages}
          /> */}
          <div className={styles.flex}>
            {product?.color?.image && (
              <img
                src={product?.color?.image?.url}
                alt="product color image"
                className={styles.image_span}
              />
            )}
            {product?.color?.color && (
              <span
                className={styles.color_span}
                style={{ background: `${product?.color?.color}` }}
              ></span>
            )}
            {/* 
            <Colors name="color" product={product} setProduct={setProduct} colorImage={colorImage} />
            <Style name="styleInput" product={product} setProduct={setProduct} colorImage={colorImage} />
             */}
            <SingularSelect
              name="parent"
              value={product?.parent}
              label="parent"
              data={parents}
              placeholder="Add to an existing product"
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AdminCreateProductPageComponentForm;
