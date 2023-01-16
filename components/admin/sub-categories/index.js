import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import AdminSubCategoriesPageComponentCreateSubCategory from './create-sub-category';
import AdminSubCategoriesPageComponentSubCategoriesList from './list';
import styles from './styles.module.scss';

const AdminSubCategoriesPageComponent = ({ subcategories, categories }) => {
  const [data, setData] = useState(subcategories);
  const { token } = useSelector((state) => state.auth);
  console.log(data);
  return (
    <AdminLayout>
      <AdminSubCategoriesPageComponentCreateSubCategory
        setSubCategories={setData}
        subCategoriesData={data}
        token={token}
        categories={categories}
      />
      <AdminSubCategoriesPageComponentSubCategoriesList
        subCategoriesData={data}
        setSubCategories={setData}
        token={token}
        categories={categories}
      />
    </AdminLayout>
  );
};

export default AdminSubCategoriesPageComponent;
