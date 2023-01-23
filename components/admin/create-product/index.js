import { getSingleProductHandler } from 'actions/products';
import { getSubCategoriesBasedOnOneCategoryHandler } from 'actions/sub-category';
import DialogModal from 'components/shared/modals/dialog';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import AdminCreateProductPageComponentForm from './form';
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
  subCategories: [],
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
  const [selectedSubs, setSelectedSubs] = useState([]);
  const [colorImage, setColorImage] = useState('');
  const [images, setImages] = useState([]);
  const [descriptionImages, setDescriptionImages] = useState('');
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    product?.parent && handleGetParent();
    return () => {};
  }, [product?.parent]);

  useEffect(() => {
    product?.category && handleGetSubCategories();

    return () => {};
  }, [product?.category]);

  useEffect(() => {
    setProduct({ ...product, subCategories: selectedSubs });

    return () => {};
  }, [selectedSubs]);

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
    setSelectedSubs([]);
    setProduct({ ...product, subCategories: [] });
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

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;

    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    // TODO: alert when subcategories not selected
    console.log('ok');
  };

  return (
    <AdminLayout>
      <div className={styles.header}>Create Product</div>
      <AdminCreateProductPageComponentForm
        product={product}
        setProduct={setProduct}
        handleSubmit={handleSubmit}
        images={images}
        setImages={setImages}
        colorImage={colorImage}
        setColorImage={setColorImage}
        parents={parents}
        handleChange={handleChange}
        categories={categories}
        subs={subs}
        selectedSubs={selectedSubs}
        setSelectedSubs={setSelectedSubs}
      />
    </AdminLayout>
  );
};

export default AdminCreateProductPageComponent;
