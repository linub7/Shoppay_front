import AdminSubCategoriesPageComponentSubCategoriesListItem from './item';
import styles from '../styles.module.scss';

const AdminSubCategoriesPageComponentSubCategoriesList = ({
  setSubCategories,
  subCategoriesData,
  token,
  categories,
}) => {
  return (
    <ul className={styles.list}>
      {subCategoriesData?.map((subCategory) => (
        <AdminSubCategoriesPageComponentSubCategoriesListItem
          key={subCategory._id}
          setSubCategories={setSubCategories}
          subCategoriesData={subCategoriesData}
          subCategory={subCategory}
          token={token}
          categories={categories}
        />
      ))}
    </ul>
  );
};

export default AdminSubCategoriesPageComponentSubCategoriesList;
