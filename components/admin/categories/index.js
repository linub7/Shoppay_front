import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import AdminCategoriesPageComponentCreateCategory from './create-category';
import styles from './styles.module.scss';

const AdminCategoriesPageComponent = ({ categories }) => {
  const [data, setData] = useState(categories);
  const { token } = useSelector((state) => state.auth);
  console.log(data);
  return (
    <AdminLayout>
      <div>
        <AdminCategoriesPageComponentCreateCategory
          setCategories={setData}
          categoriesData={data}
          token={token}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminCategoriesPageComponent;
