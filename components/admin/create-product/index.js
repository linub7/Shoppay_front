import { getSingleProductHandler } from 'actions/products';
import { getSubCategoriesBasedOnOneCategoryHandler } from 'actions/sub-category';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import styles from './styles.module.scss';

const initialState = {
  name: '',
  description: '',
  brand: '',
  sku: '',
  discount: 0,
  images: [],
  descriptionImages: [],
  parent: '',
  category: '',
  subCategories: '',
  color: {
    color: '',
    image: '',
  },
  sizes: [{ size: '', qty: '', price: '' }],
  details: [{ name: '', value: '' }],
  questions: [{ question: '', answer: '' }],
  shipping: '',
};

const AdminCreateProductPageComponent = ({ parents, categories }) => {
  const [product, setProduct] = useState(initialState);
  const [subs, setSubs] = useState([]);

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    handleGetParent();
    return () => {};
  }, [product?.parent]);

  useEffect(() => {
    handleGetSubCategories();

    return () => {};
  }, [product?.category]);

  const handleGetParent = async () => {
    const { err, data } = await getSingleProductHandler(product?.parent);
    if (err) {
      console.log(err);
      return;
    }
    setProduct({
      ...product,
      name: data?.data?.data?.name,
      description: data?.data?.data?.description,
      brand: data?.data?.data?.brand,
      category: data?.data?.data?.category,
      subCategories: data?.data?.data?.subCategories,
      questions: [],
      details: [],
    });
  };

  const handleGetSubCategories = async () => {
    const { err, data } = await getSubCategoriesBasedOnOneCategoryHandler(
      product?.category,
      token
    );
    if (err) {
      console.log(err);
      return;
    }
    setSubs(data?.data?.data);
  };

  return (
    <AdminLayout>
      <div className={styles.header}>Create Product</div>
    </AdminLayout>
  );
};

export default AdminCreateProductPageComponent;
