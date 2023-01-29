import {
  createProductHandler,
  getSingleProductHandler,
} from 'actions/products';
import { getSubCategoriesBasedOnOneCategoryHandler } from 'actions/sub-category';
import {
  uploadColorImageHandler,
  uploadProductMultiImagesHandler,
} from 'actions/upload-images';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDialog } from 'store/slices/dialogSlice';
import { dataURLtoFile } from 'utils/dataConvert';
import { validateCreateProduct } from 'utils/validation';
import AdminLayout from '../layout';
import AdminCreateProductPageComponentForm from './form';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';
import { toast } from 'react-hot-toast';

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

  const dispatch = useDispatch();

  let uploadedImages = [];
  let uploadedStyleImage = {};

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

  const handleSubmit = async () => {
    const checks = validateCreateProduct(product, images);
    if (checks.length > 0) {
      dispatch(
        showDialog({ header: 'Please follow our instructions.', msgs: checks })
      );
    } else {
      setLoading(true);
      if (images) {
        let tmp = images.map((el) => {
          return dataURLtoFile(el, uuidv4());
        });
        const path = 'product images';
        let formData = new FormData();
        formData.append('path', path);
        Object.values(tmp).forEach((item) => {
          formData.append('imageInputFile', item);
        });

        const { err, data } = await uploadProductMultiImagesHandler(
          formData,
          token
        );
        if (err) {
          console.log(err);
          toast.error(err);
          return;
        }
        uploadedImages = data?.data?.data;
        console.log(data);
      }
      if (product?.color?.image) {
        const convertedImage = dataURLtoFile(product?.color?.image, uuidv4());
        const path = 'product style images';
        let formData = new FormData();
        formData.append('path', path);
        formData.append('colorImageInput', convertedImage);
        const { err, data } = await uploadColorImageHandler(formData, token);
        if (err) {
          console.log(err);
          toast.error(err);
          return;
        }
        uploadedStyleImage = data?.data?.data;
        console.log(data);
      }
      const payload = {
        ...product,
        images: uploadedImages,
        color: {
          image: uploadedStyleImage,
          color: product?.color?.color,
        },
      };
      const { err, data } = await createProductHandler(payload, token);
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      setLoading(false);
      console.log(data);
    }
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
