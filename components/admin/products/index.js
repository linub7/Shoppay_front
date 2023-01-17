import AdminLayout from '../layout';
import ProductCard from './card';
import styles from './styles.module.scss';

const AdminProductsPageComponent = ({ products }) => {
  return (
    <AdminLayout>
      <div className={styles.header}>All Products</div>
      {products?.map((prod) => (
        <ProductCard key={prod._id} />
      ))}
    </AdminLayout>
  );
};

export default AdminProductsPageComponent;
