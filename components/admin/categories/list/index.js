import AdminCategoriesPageComponentCategoriesListItem from './item';
import styles from '../styles.module.scss';

const AdminCategoriesPageComponentCategoriesList = ({
  categoriesData,
  setCategories,
  token,
}) => {
  return (
    <ul className={styles.list}>
      {categoriesData?.map((category) => (
        <AdminCategoriesPageComponentCategoriesListItem
          key={category._id}
          category={category}
          token={token}
          setCategories={setCategories}
          categoriesData={categoriesData}
        />
      ))}
    </ul>
  );
};

export default AdminCategoriesPageComponentCategoriesList;
