import { deleteCategoryHandler, updateCategoryHandler } from 'actions/category';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoPencil, IoTrash } from 'react-icons/io5';
import styles from '../../styles.module.scss';

const AdminCategoriesPageComponentCategoriesListItem = ({
  category,
  token,
  setCategories,
  categoriesData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const handleUpdateCategory = async (slug) => {
    const { err, data } = await updateCategoryHandler(slug, name, token);
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    toast.success('Category updated Successfully 👍.');
    const filteredCategoryArray = categoriesData?.filter(
      (category) => category?.slug !== slug
    );
    setCategories([...filteredCategoryArray, data?.data?.data]);
    setName(data?.data?.data?.name);
    setIsOpen(false);
  };

  const handleDeleteCategory = async (slug) => {
    if (window.confirm('Are you sure?')) {
      const { err, data } = deleteCategoryHandler(slug, token);
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      toast.success('Category deleted Successfully 👍.');
      const filteredCategoryArray = categoriesData?.filter(
        (category) => category?.slug !== slug
      );
      setCategories(filteredCategoryArray);
      setIsOpen(false);
    }
  };

  return (
    <li className={styles.list__item}>
      <input
        className={isOpen ? styles.open : ''}
        type="text"
        value={name ? name : category?.name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isOpen}
        ref={inputRef}
      />
      {isOpen && (
        <div className={styles.list__item_expand}>
          <button
            className={styles.btn}
            onClick={() => handleUpdateCategory(category?.slug)}
          >
            Save
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setIsOpen(false);
              setName('');
            }}
          >
            Cancel
          </button>
        </div>
      )}
      <div className={styles.list__items_actions}>
        {!isOpen && (
          <IoPencil
            onClick={() => {
              setIsOpen(true);
              inputRef.current.focus();
            }}
          />
        )}
        <IoTrash onClick={() => handleDeleteCategory(category?.slug)} />
      </div>
    </li>
  );
};

export default AdminCategoriesPageComponentCategoriesListItem;
